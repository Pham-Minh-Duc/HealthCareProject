package com.HealthCare.HealthCare.controller;

import com.HealthCare.HealthCare.dto.ApiResponse;
import com.HealthCare.HealthCare.dto.hospital.HospitalDto;
import com.HealthCare.HealthCare.service.HospitalService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hospital")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HospitalController {
    HospitalService hospitalService;

    @GetMapping("/get_all")
    ApiResponse<List<HospitalDto>> getAllHospitals() {
        return ApiResponse.<List<HospitalDto>>builder().result(hospitalService.getAllHospitals()).build();
    }

    @GetMapping("/get_by_id/{id}")
    ApiResponse<HospitalDto> getById(@PathVariable("id") int id) {
        return ApiResponse.<HospitalDto>builder().result(hospitalService.getById(id)).build();
    }

    @GetMapping("get_by_name/{name}")
    ApiResponse<List<HospitalDto>> getByName(@PathVariable("name") String name) {
        return ApiResponse.<List<HospitalDto>>builder().result(hospitalService.getByName(name)).build();
    }
}
