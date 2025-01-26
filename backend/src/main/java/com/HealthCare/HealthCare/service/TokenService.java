package com.HealthCare.HealthCare.service;

import com.HealthCare.HealthCare.dto.token.AuthenticationResponse;
import com.HealthCare.HealthCare.dto.token.RefreshRequest;
import com.HealthCare.HealthCare.dto.user.UserResponse;
import com.HealthCare.HealthCare.entity.InvalidatedToken;
import com.HealthCare.HealthCare.entity.User;
import com.HealthCare.HealthCare.exception.AppException;
import com.HealthCare.HealthCare.exception.ErrorCode;
import com.HealthCare.HealthCare.mapper.UserMapper;
import com.HealthCare.HealthCare.repository.InvalidatedTokenRepository;
import com.HealthCare.HealthCare.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.UUID;

@Component
public class TokenService {
    @Value("${jwt.signerKey}")
    private String signerKey;

    @Value("${jwt.refreshable-duration}")
    private Long refreshable_duration;

    @Value("${jwt.valid-duration}")
    private Long valid_duration;

    private final InvalidatedTokenRepository invalidatedTokenRepository;
    private final UserRepository userRepository;

    public TokenService(InvalidatedTokenRepository invalidatedTokenRepository,
                        UserRepository userRepository) {
        this.invalidatedTokenRepository = invalidatedTokenRepository;
        this.userRepository = userRepository;
    }

    public String generateToken(User user) {
        // tạo header cho token (chứa loại token và thuật toán mã hóa
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
        // tạo payload
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getEmail())
                .issuer("HealCare.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(valid_duration, ChronoUnit.SECONDS).toEpochMilli()
                ))
                .jwtID(UUID.randomUUID().toString())
                .claim("role", user.getRole())
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        // tạo token
        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            // kí xác thực token
            jwsObject.sign(new MACSigner(signerKey.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            throw new RuntimeException(e);
        }
    }

    public UserResponse refreshToken(RefreshRequest request) throws ParseException, JOSEException {
        var signJwt = veryfyToken(request.getToken(), true);

        var jit = signJwt.getJWTClaimsSet().getJWTID();
        var expiryTime = signJwt.getJWTClaimsSet().getExpirationTime();

        InvalidatedToken invalidatedToken = InvalidatedToken.builder()
                .id(jit)
                .expiryTime(expiryTime)
                .build();
        invalidatedTokenRepository.save(invalidatedToken);

        var userEmail = signJwt.getJWTClaimsSet().getSubject();

        var user = userRepository.findByEmail(userEmail).orElseThrow(() -> new AppException(ErrorCode.UNAUTHENTICATED));

        return UserMapper.toUserResponse(user, generateToken(user));
    }

    public SignedJWT veryfyToken(String token, boolean isRefresh) throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(signerKey.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);

        Date expiryTime = (isRefresh)
                ? new Date (signedJWT.getJWTClaimsSet().getIssueTime().toInstant().plus(refreshable_duration, ChronoUnit.SECONDS).toEpochMilli())
                : signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(verifier);

        if (!(verified && expiryTime.after(new Date()))) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        if (invalidatedTokenRepository.existsById(signedJWT.getJWTClaimsSet().getJWTID())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        return signedJWT;
    }
}
