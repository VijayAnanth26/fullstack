package com.event.vijay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventName;
    private String eventDescription;
    private String totalPackage;
    private int participationCount;
    private String charges;
    
    public String getEventName() {
        return eventName;
    }
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }
    public String getEventDescription() {
        return eventDescription;
    }
    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }
    public String getTotalPackage() {
        return totalPackage;
    }
    public void setTotalPackage(String totalPackage) {
        this.totalPackage = totalPackage;
    }
    public int getParticipationCount() {
        return participationCount;
    }
    public void setParticipationCount(int participationCount) {
        this.participationCount = participationCount;
    }
    public String getCharges() {
        return charges;
    }
    public void setCharges(String charges) {
        this.charges = charges;
    }

}
