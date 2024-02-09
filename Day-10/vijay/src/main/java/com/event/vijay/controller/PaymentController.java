package com.event.vijay.controller;

import com.event.vijay.dto.request.PaymentRequest;
import com.event.vijay.dto.response.PaymentResponse;
import com.event.vijay.service.PaymentService;
import com.event.vijay.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
// @RequiredArgsConstructor
@RequestMapping(MyConstant.PAYMENT)
public class PaymentController {
    
    @Autowired
    private PaymentService paymentService;

    // public PaymentController(PaymentService paymentService) {
    //     this.paymentService = paymentService;
    // }

    @PostMapping
    public ResponseEntity<PaymentResponse> createPayment(@RequestBody PaymentRequest paymentRequest) {
        PaymentResponse createdPayment = paymentService.createPayment(paymentRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPayment);
    }

    @GetMapping("/{paymentId}")
    public ResponseEntity<PaymentResponse> getPayment(@PathVariable Long paymentId) {
        PaymentResponse payment = paymentService.getPayment(paymentId);
        return ResponseEntity.ok(payment);
    }

    @DeleteMapping("/{paymentId}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);
        return ResponseEntity.noContent().build();
    }
}
