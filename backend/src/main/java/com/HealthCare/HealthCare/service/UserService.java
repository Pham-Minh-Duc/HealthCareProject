package com.HealthCare.HealthCare.service;

import com.HealthCare.HealthCare.dto.user.LoginRequest;
import com.HealthCare.HealthCare.dto.user.LogoutRequest;
import com.HealthCare.HealthCare.dto.user.UserDto;
import com.HealthCare.HealthCare.dto.user.UserResponse;
import com.HealthCare.HealthCare.entity.InvalidatedToken;
import com.HealthCare.HealthCare.entity.User;
import com.HealthCare.HealthCare.exception.AppException;
import com.HealthCare.HealthCare.exception.ErrorCode;
import com.HealthCare.HealthCare.mapper.UserMapper;
import com.HealthCare.HealthCare.repository.InvalidatedTokenRepository;
import com.HealthCare.HealthCare.repository.UserRepository;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Date;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {
    UserRepository userRepository;
    InvalidatedTokenRepository invalidatedTokenRepository;
    TokenService tokenService;
    PasswordEncoder passwordEncoder;

    public UserResponse register(UserDto userDto) {
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new AppException(ErrorCode.EMAIL_EXISTED);
        }
        if (userRepository.existsByPhone(userDto.getPhone())) {
            throw new AppException(ErrorCode.PHONE_EXISTED);
        }
        User user = UserMapper.toUser(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userRepository.save(user);
        return UserMapper.toUserResponse(user, tokenService.generateToken(user));
    }

    public UserResponse login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
        if(!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new AppException(ErrorCode.WRONG_PASSWORD);
        }
        return UserMapper.toUserResponse(user, tokenService.generateToken(user));
    }

    public void logout(LogoutRequest request) throws ParseException, JOSEException {
        try {
            var signToken = tokenService.veryfyToken(request.getToken(), true);

            String jit = signToken.getJWTClaimsSet().getJWTID();
            Date expiryTime = signToken.getJWTClaimsSet().getExpirationTime();

            InvalidatedToken invalidatedToken = InvalidatedToken.builder()
                    .id(jit)
                    .expiryTime(expiryTime)
                    .build();
            invalidatedTokenRepository.save(invalidatedToken);
        } catch (AppException exception) {
        }
    }
}
