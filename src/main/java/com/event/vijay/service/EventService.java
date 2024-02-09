package com.event.vijay.service;

import org.springframework.stereotype.Service;

import com.event.vijay.dto.request.EventRequest;
import com.event.vijay.dto.response.EventResponse;

@Service
public interface EventService {

    EventResponse getEvent(Long eventId);

    EventResponse createEvent(EventRequest eventRequest);

    EventResponse updateEvent(Long eventId, EventRequest eventRequest);

    void deleteEvent(Long eventId);
}
