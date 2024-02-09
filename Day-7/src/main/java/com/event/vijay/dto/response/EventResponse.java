package com.event.vijay.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventResponse {
    private Long eventId;
    private String eventType;
    private String description;
    private Integer participantsCount;
    private Integer eventCharges;
}
