package com.example.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class departmentModel {
    private String department_name;
    private String department_description;
    private int doctor_id;
    private int hospital_id;
}
