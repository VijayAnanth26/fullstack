package com.event.vijay.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.vijay.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
}
