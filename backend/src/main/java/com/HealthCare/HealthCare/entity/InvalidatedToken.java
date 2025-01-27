package com.HealthCare.HealthCare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "invalidated_token", schema = "HealthCareDB")
public class InvalidatedToken {
    @Id
    @Column(name = "token_id")
    String id;

    @Column(name = "expiry_time")
    Date expiryTime;
}
