package com.HealthCare.HealthCare.dto.user;

import com.HealthCare.HealthCare.enums.Gender;
import com.HealthCare.HealthCare.enums.Role;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {
    String name;
    String password;
    String email;
    String phone;
    String address;
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate dateOfBirth;
    Gender gender;
    Role role = Role.USER;
}
