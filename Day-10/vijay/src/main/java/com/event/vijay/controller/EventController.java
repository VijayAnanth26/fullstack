package com.event.vijay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.event.vijay.dto.request.EventRequest;
import com.event.vijay.dto.response.EventResponse;
import com.event.vijay.service.EventService;
import com.event.vijay.utils.MyConstant;

// import lombok.RequiredArgsConstructor;

@RestController
// @RequiredArgsConstructor
@RequestMapping(MyConstant.EVENT)
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/{eventId}")
    public ResponseEntity<EventResponse> getEvent(@PathVariable Long eventId) {
        EventResponse event = eventService.getEvent(eventId);
        return ResponseEntity.ok(event);
    }

    @PostMapping
    public ResponseEntity<EventResponse> createEvent(@RequestBody EventRequest eventRequest) {
        EventResponse createdEvent = eventService.createEvent(eventRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
    }

    @PutMapping("/{eventId}")
    public ResponseEntity<EventResponse> updateEvent(@PathVariable Long eventId, @RequestBody EventRequest eventRequest) {
        EventResponse updatedEvent = eventService.updateEvent(eventId, eventRequest);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long eventId) {
        eventService.deleteEvent(eventId);
        return ResponseEntity.noContent().build();
    }
}
