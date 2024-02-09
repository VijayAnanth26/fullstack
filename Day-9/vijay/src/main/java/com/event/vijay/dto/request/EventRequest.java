package com.event.vijay.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventRequest {
    private String eventType;
    private String description;
    private Integer participantsCount;
    private Integer eventCharges;
}
