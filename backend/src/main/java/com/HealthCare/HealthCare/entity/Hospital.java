package com.HealthCare.HealthCare.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@Entity
@Table(name = "hospital", schema = "HealthCareDB")
public class Hospital {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hostpital_id", nullable = false)
    private int id;

    @Column(name = "hospital_name")
    private String name;

    @Column(name = "hospital_address")
    private String address;

    @Column(name = "hospital_phone")
    private String phone;

    @Column(name = "hospital_email")
    private String email;

    @Column(name = "hospital_type")
    private String type;

    @Column(name = "hospital_established_date")
    private LocalDate establishedDate;

    @OneToMany(mappedBy = "hospital")
    private Set<Department> departments = new LinkedHashSet<>();

    @OneToMany(mappedBy = "hospital")
    private Set<Booking> bookings = new LinkedHashSet<>();
}
