package com.HealthCare.HealthCare.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@Entity
@Table(name = "doctor", schema = "HealthCareDB")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id", nullable = false)
    private int id;

    @Column(name = "doctor_name")
    private String name;

    @Column(name = "doctor_email")
    private String email;

    @Column(name = "doctor_phone")
    private String phone;

    @Column(name = "doctor_qualification")
    private String qualification;

    @Column(name = "doctor_experience_years")
    private int experience;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    @OneToMany(mappedBy = "doctor")
    private Set<Booking> bookings = new LinkedHashSet<>();
}
