package com.HealthCare.HealthCare.mapper;

import com.HealthCare.HealthCare.dto.hospital.HospitalDto;
import com.HealthCare.HealthCare.entity.Hospital;

public class HospitalMapper {
    public static HospitalDto toHospitalDto(Hospital hospital) {
        if(hospital ==  null) {
            return null;
        }

        HospitalDto hospitalDto = new HospitalDto();

        hospitalDto.setName(hospital.getName());
        hospitalDto.setAddress(hospital.getAddress());
        hospitalDto.setPhone(hospital.getPhone());
        hospitalDto.setEmail(hospital.getEmail());
        hospitalDto.setType(hospital.getType());
        hospitalDto.setEstablishedDate(hospital.getEstablishedDate());

        return hospitalDto;
    }
}
