package com.event.vijay.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.event.vijay.dto.request.PaymentRequest;
import com.event.vijay.dto.response.PaymentResponse;
import com.event.vijay.model.Payment;
import com.event.vijay.repository.PaymentRepository;
import com.event.vijay.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public PaymentResponse getPayment(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Payment not found with id: " + paymentId));

        PaymentResponse paymentResponse = new PaymentResponse();
        paymentResponse.setPaymentId(payment.getPaymentId());
        paymentResponse.setAmount(payment.getAmount());
        paymentResponse.setPaymentDate(payment.getPaymentDate());
        paymentResponse.setModeOfPayment(payment.getModeOfPayment());

        return paymentResponse;
    }

    public PaymentResponse createPayment(PaymentRequest paymentRequest) {
        Payment payment = new Payment();
        payment.setAmount(paymentRequest.getAmount());
        payment.setModeOfPayment(paymentRequest.getModeOfPayment());

        Payment createdPayment = paymentRepository.save(payment);

        PaymentResponse paymentResponse = new PaymentResponse();
        paymentResponse.setPaymentId(createdPayment.getPaymentId());
        paymentResponse.setAmount(createdPayment.getAmount());
        paymentResponse.setPaymentDate(createdPayment.getPaymentDate());
        paymentResponse.setModeOfPayment(createdPayment.getModeOfPayment());

        return paymentResponse;
    }

    public PaymentResponse updatePayment(Long paymentId, PaymentRequest paymentRequest) {
        Payment existingPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Payment not found with id: " + paymentId));

        existingPayment.setAmount(paymentRequest.getAmount());
        existingPayment.setModeOfPayment(paymentRequest.getModeOfPayment());

        Payment updatedPayment = paymentRepository.save(existingPayment);

        PaymentResponse paymentResponse = new PaymentResponse();
        paymentResponse.setPaymentId(updatedPayment.getPaymentId());
        paymentResponse.setAmount(updatedPayment.getAmount());
        paymentResponse.setPaymentDate(updatedPayment.getPaymentDate());
        paymentResponse.setModeOfPayment(updatedPayment.getModeOfPayment());

        return paymentResponse;
    }

    public void deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
