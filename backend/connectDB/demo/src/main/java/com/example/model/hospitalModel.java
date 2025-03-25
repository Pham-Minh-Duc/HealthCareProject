package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data   //tự sinh get,set, toString, equals, hashCode
@NoArgsConstructor  // tự sinh constructor rỗng
@AllArgsConstructor // tự sinh constructor full tham số
public class hospitalModel {
    private int id;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String type;
    private LocalDate establish_date;
}
