package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingModel {
    private int booking_id;
    private LocalDate booking_date;
    private String reason;
    private int User_id;
    private int hospital_id;
    private int status_id;
    private int doctor_id;
}
