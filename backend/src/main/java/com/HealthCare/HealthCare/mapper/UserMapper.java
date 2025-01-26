package com.HealthCare.HealthCare.mapper;

import com.HealthCare.HealthCare.dto.user.UserDto;
import com.HealthCare.HealthCare.dto.user.UserResponse;
import com.HealthCare.HealthCare.entity.User;

public class UserMapper {
    public static UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }
        UserDto userDto = new UserDto();

        userDto.setName(user.getName());
        userDto.setPassword(user.getPassword());
        userDto.setEmail(user.getEmail());
        userDto.setPhone(user.getPhone());
        userDto.setAddress(user.getAddress());
        userDto.setDateOfBirth(user.getDateOfBirth());
        userDto.setGender(user.getGender());

        return userDto;
    }

    public static User toUser(UserDto userDto) {
        if (userDto == null) {
            return null;
        }

        User user = new User();

        user.setName(userDto.getName());
        user.setPassword(userDto.getPassword());
        user.setEmail(userDto.getEmail());
        user.setPhone(userDto.getPhone());
        user.setAddress(userDto.getAddress());
        user.setDateOfBirth(userDto.getDateOfBirth());
        user.setGender(userDto.getGender());
        user.setRole(userDto.getRole());

        return user;
    }

    public static UserResponse toUserResponse(User user, String token) {
        if(user == null) {
            return null;
        }

        UserResponse userResponse = new UserResponse();

        userResponse.setName(user.getName());
        userResponse.setEmail(user.getEmail());
        userResponse.setPhone(user.getPhone());
        userResponse.setAddress(user.getAddress());
        userResponse.setDateOfBirth(user.getDateOfBirth());
        userResponse.setGender(user.getGender());
        userResponse.setToken(token);

        return userResponse;
    }
}
