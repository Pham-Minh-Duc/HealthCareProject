package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorModel {
    private int ID;
    private String name;
    private String email;
    private String phone;
    private int department_id;
    private int status_id;
    private String qualification;
    private int experience;
}
