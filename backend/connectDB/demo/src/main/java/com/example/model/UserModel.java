package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    private int id;
    private String name;
    private String password;
    private String email;
    private String phone;
    private String address;
    private String birthDay;
    private String gender;
    private int status_id;
}
