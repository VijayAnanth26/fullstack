package com.event.vijay.utils;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;
import java.util.List;

public class MyConstant {
    public static final String AUTH = "/api/v1/auth";
    public static final String USER = "/api/v1/user";
    public static final String REGISTER = "/register";
    public static final String LOGIN = "/login";
    public static final String USERLIST="/list";
    public static final String EVENT="/events";
    // public static final String EVENTID="/{eventId}";
    public static final String BOOKING="/bookings";
    // public static final String BOOKINGID="/{bookingId}";
    public static final String PAYMENT="/payments";
    // public static final String PAYMENTID="/{paymentId}";

    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION,CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(GET.name(),POST.name(),PUT.name(),PATCH.name(),DELETE.name(),HEAD.name());

    public static final String SWAGGER_LOCALHOST_URL = "http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String SWAGGER_SCHEME = "bearer";
    public static final String SWAGGER_BEARER_FORMAT = "JWT";
    public static final String SWAGGER_DESCRIPTION = "produce a json token";
}
