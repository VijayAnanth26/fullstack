package com.event.vijay.service;

import org.springframework.stereotype.Service;

import com.event.vijay.dto.request.PaymentRequest;
import com.event.vijay.dto.response.PaymentResponse;
@Service
public interface PaymentService {
    PaymentResponse getPayment(Long paymentId);

    PaymentResponse createPayment(PaymentRequest paymentRequest);

    PaymentResponse updatePayment(Long paymentId, PaymentRequest paymentRequest);

    void deletePayment(Long paymentId);
}
