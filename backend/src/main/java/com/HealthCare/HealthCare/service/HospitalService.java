package com.HealthCare.HealthCare.service;

import com.HealthCare.HealthCare.dto.hospital.HospitalDto;
import com.HealthCare.HealthCare.exception.AppException;
import com.HealthCare.HealthCare.exception.ErrorCode;
import com.HealthCare.HealthCare.mapper.HospitalMapper;
import com.HealthCare.HealthCare.repository.HospitalRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HospitalService {
    HospitalRepository hospitalRepository;

    @PreAuthorize("hasRole('ADMIN')")
    public List<HospitalDto> getAllHospitals() {
        List<HospitalDto> hospitalDtos = hospitalRepository.findAll().stream().map(HospitalMapper::toHospitalDto).toList();
        return hospitalDtos;
    }

    public HospitalDto getById(int id) {
        return HospitalMapper.toHospitalDto(hospitalRepository.findById(id).orElseThrow(() -> new AppException(ErrorCode.NOT_FOUND)));
    }

    public List<HospitalDto> getByName(String name) {
        List<HospitalDto> hospitalDtos = hospitalRepository.findByName(name).stream().map(HospitalMapper::toHospitalDto).toList();
        return hospitalDtos;
    }
}
