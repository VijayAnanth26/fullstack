package com.event.vijay.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.event.vijay.dto.request.EventRequest;
import com.event.vijay.dto.response.EventResponse;
import com.event.vijay.model.Event;
import com.event.vijay.repository.EventRepository;
import com.event.vijay.service.EventService;

// import lombok.RequiredArgsConstructor;

@Service
// @RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    @Autowired
    private EventRepository eventRepository;

    @Override
    public EventResponse getEvent(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event not found with id: " + eventId));

        EventResponse eventResponse = new EventResponse();
        eventResponse.setEventId(event.getEventId());
        eventResponse.setEventType(event.getEventType());
        eventResponse.setDescription(event.getDescription());
        eventResponse.setParticipantsCount(event.getParticipantsCount());
        eventResponse.setEventCharges(event.getEventCharges());

        return eventResponse;
    }

    @Override
    public EventResponse createEvent(EventRequest eventRequest) {
        Event event = new Event();
        event.setEventType(eventRequest.getEventType());
        event.setDescription(eventRequest.getDescription());
        event.setParticipantsCount(eventRequest.getParticipantsCount());
        event.setEventCharges(eventRequest.getEventCharges());

        Event createdEvent = eventRepository.save(event);

        EventResponse eventResponse = new EventResponse();
        eventResponse.setEventId(createdEvent.getEventId());
        eventResponse.setEventType(createdEvent.getEventType());
        eventResponse.setDescription(createdEvent.getDescription());
        eventResponse.setParticipantsCount(createdEvent.getParticipantsCount());
        eventResponse.setEventCharges(createdEvent.getEventCharges());

        return eventResponse;
    }

    @Override
    public EventResponse updateEvent(Long eventId, EventRequest eventRequest) {
        Event existingEvent = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Event not found with id: " + eventId));

        existingEvent.setEventType(eventRequest.getEventType());
        existingEvent.setDescription(eventRequest.getDescription());
        existingEvent.setParticipantsCount(eventRequest.getParticipantsCount());
        existingEvent.setEventCharges(eventRequest.getEventCharges());

        Event updatedEvent = eventRepository.save(existingEvent);

        EventResponse eventResponse = new EventResponse();
        eventResponse.setEventId(updatedEvent.getEventId());
        eventResponse.setEventType(updatedEvent.getEventType());
        eventResponse.setDescription(updatedEvent.getDescription());
        eventResponse.setParticipantsCount(updatedEvent.getParticipantsCount());
        eventResponse.setEventCharges(updatedEvent.getEventCharges());

        return eventResponse;
    }

    @Override
    public void deleteEvent(Long eventId) {
        eventRepository.deleteById(eventId);
    }
}