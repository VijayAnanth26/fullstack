package com.event.vijay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "event")
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;
    @Column(nullable = false)
    private String eventType;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private Integer participantsCount;
    @Column(nullable = false)
    private Integer eventCharges;

    // @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    // private List<Booking> bookings;
}
