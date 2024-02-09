package com.event.vijay.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.event.vijay.dto.request.BookingRequest;
import com.event.vijay.dto.response.BookingResponse;
import com.event.vijay.model.Booking;
import com.event.vijay.repository.BookingRepository;
import com.event.vijay.service.BookingService;

// @SuppressWarnings("null")
@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public BookingResponse getBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with id: " + bookingId));

        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setBookingId(booking.getBookingId());
        bookingResponse.setSubmissionDate(booking.getSubmissionDate());
        bookingResponse.setDescription(booking.getDescription());
        bookingResponse.setEventDate(booking.getEventDate());
        bookingResponse.setBookingStatus(booking.isBookingStatus());
        bookingResponse.setHeadcount(booking.getHeadcount());
        bookingResponse.setAmount(booking.getAmount());

        return bookingResponse;
    }

    @Override
    public BookingResponse createBooking(BookingRequest bookingRequest) {
        Booking booking = new Booking();
        booking.setDescription(bookingRequest.getDescription());
        booking.setEventDate(bookingRequest.getEventDate());
        booking.setHeadcount(bookingRequest.getHeadcount());

        Booking createdBooking = bookingRepository.save(booking);

        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setBookingId(createdBooking.getBookingId());
        bookingResponse.setSubmissionDate(createdBooking.getSubmissionDate());
        bookingResponse.setDescription(createdBooking.getDescription());
        bookingResponse.setEventDate(createdBooking.getEventDate());
        bookingResponse.setBookingStatus(createdBooking.isBookingStatus());
        bookingResponse.setHeadcount(createdBooking.getHeadcount());
        bookingResponse.setAmount(createdBooking.getAmount());

        return bookingResponse;
    }

    @Override
    public BookingResponse updateBooking(Long bookingId, BookingRequest bookingRequest) {
        Booking existingBooking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Booking not found with id: " + bookingId));

        existingBooking.setDescription(bookingRequest.getDescription());
        existingBooking.setEventDate(bookingRequest.getEventDate());
        existingBooking.setHeadcount(bookingRequest.getHeadcount());

        Booking updatedBooking = bookingRepository.save(existingBooking);

        BookingResponse bookingResponse = new BookingResponse();
        bookingResponse.setBookingId(updatedBooking.getBookingId());
        bookingResponse.setSubmissionDate(updatedBooking.getSubmissionDate());
        bookingResponse.setDescription(updatedBooking.getDescription());
        bookingResponse.setEventDate(updatedBooking.getEventDate());
        bookingResponse.setBookingStatus(updatedBooking.isBookingStatus());
        bookingResponse.setHeadcount(updatedBooking.getHeadcount());
        bookingResponse.setAmount(updatedBooking.getAmount());

        return bookingResponse;
    }

    @Override
    public void deleteBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}
