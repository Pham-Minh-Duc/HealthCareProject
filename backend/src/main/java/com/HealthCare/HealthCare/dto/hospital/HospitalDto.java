package com.HealthCare.HealthCare.dto.hospital;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class HospitalDto {
    String name;
    String address;
    String phone;
    String email;
    String type;
    LocalDate establishedDate;
}
