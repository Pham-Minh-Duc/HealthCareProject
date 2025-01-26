package com.HealthCare.HealthCare.controller;

import com.HealthCare.HealthCare.dto.ApiResponse;
import com.HealthCare.HealthCare.dto.token.RefreshRequest;
import com.HealthCare.HealthCare.dto.user.LoginRequest;
import com.HealthCare.HealthCare.dto.user.LogoutRequest;
import com.HealthCare.HealthCare.dto.user.UserDto;
import com.HealthCare.HealthCare.dto.user.UserResponse;
import com.HealthCare.HealthCare.service.TokenService;
import com.HealthCare.HealthCare.service.UserService;
import com.nimbusds.jose.JOSEException;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    UserService userService;
    TokenService tokenService;

    @PostMapping("/register")
    ApiResponse<UserResponse> register(@RequestBody @Valid UserDto userDto) {
        return ApiResponse.<UserResponse>builder().result(userService.register(userDto)).build();
    }

    @PostMapping("/login")
    ApiResponse<UserResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        return ApiResponse.<UserResponse>builder().result(userService.login(loginRequest)).build();
    }

    @PostMapping("/logout")
    ApiResponse<Void> logout(@RequestBody LogoutRequest request) throws ParseException, JOSEException {
        userService.logout(request);
        return ApiResponse.<Void>builder().build();
    }

    @PostMapping("/refresh")
    ApiResponse<UserResponse> logout(@RequestBody RefreshRequest request) throws ParseException, JOSEException {
        return ApiResponse.<UserResponse>builder().result(tokenService.refreshToken(request)).build();
    }
}
