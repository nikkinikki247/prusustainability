package com.team4.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "posts", schema = "public")
@Builder
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "employee_name")
    private String employeeName;

//    @Column(name = "date_of_event")
//    private LocalDateTime dateOfEvent;

    @Column(name = "description")
    private String description;

    @Column(name = "employee_id")
    private String employeeId;

    @Column(name = "event_name")
    private String eventName;

//    @Column(name = "created_at")
//    private LocalDateTime createdAt;
}
