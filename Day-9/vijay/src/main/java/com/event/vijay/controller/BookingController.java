package com.event.vijay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.vijay.dto.response.BookingResponse;
import com.event.vijay.service.BookingService;
import com.event.vijay.utils.MyConstant;
import com.event.vijay.dto.request.BookingRequest;

@RestController
@RequestMapping(MyConstant.BOOKING)
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingResponse> createBooking(@RequestBody BookingRequest bookingRequest) {
        BookingResponse createdBooking = bookingService.createBooking(bookingRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBooking);
    }

    @GetMapping("/{bookingId}")
    public ResponseEntity<BookingResponse> getBooking(@PathVariable Long bookingId) {
        BookingResponse booking = bookingService.getBooking(bookingId);
        return ResponseEntity.ok(booking);
    }

    @PutMapping("/{bookingId}")
    public ResponseEntity<BookingResponse> updateBooking(
            @PathVariable Long bookingId,
            @RequestBody BookingRequest bookingRequest) {
        BookingResponse updatedBooking = bookingService.updateBooking(bookingId, bookingRequest);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/{bookingId}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long bookingId) {
        bookingService.deleteBooking(bookingId);
        return ResponseEntity.noContent().build();
    }

}