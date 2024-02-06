package com.event.vijay.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.vijay.model.Event;
import com.event.vijay.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long eventId) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        return optionalEvent.orElse(null);
    }

    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

    public void deleteEvent(Long eventId) {
        eventRepository.deleteById(eventId);
    }
}
