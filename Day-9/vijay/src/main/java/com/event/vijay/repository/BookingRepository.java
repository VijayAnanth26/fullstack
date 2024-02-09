package com.event.vijay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.vijay.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
