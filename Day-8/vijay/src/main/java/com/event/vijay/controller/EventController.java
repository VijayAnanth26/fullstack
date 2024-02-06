package com.event.vijay.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.event.vijay.model.Event;
import com.event.vijay.service.EventService;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{eventId}")
    public Event getEventById(@PathVariable Long eventId) {
        return eventService.getEventById(eventId);
    }

    @PostMapping
    public Event addEvent(@RequestBody Event event) {
        return eventService.addEvent(event);
    }

    @DeleteMapping("/{eventId}")
    public void deleteEvent(@PathVariable Long eventId) {
        eventService.deleteEvent(eventId);
    }
}
