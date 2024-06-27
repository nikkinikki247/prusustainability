package com.team4.backend.controller;

import com.team4.backend.model.Event;
import com.team4.backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EventController {

    @Autowired
    private EventRepository eventRepository;


    @GetMapping("/events")
    List<Event> all() {
        return eventRepository.findAll();
    }

    @PostMapping("/events")
    Event newEvent(@RequestBody Event newEvent) {
        return eventRepository.save(newEvent);
    }

    @GetMapping("/events/{id}")
    Event one(@PathVariable int id) {

        Optional<Event> eventTest = eventRepository.findById(id);
        if (eventTest.isPresent()) {
            return eventTest.get();
        } else {
            return null;
        }
    }

    @PutMapping("/events/{id}")
    Event replaceEvent(@RequestBody Event newEvent, @PathVariable Integer id) {
        newEvent.setId(id);
        eventRepository.save(newEvent);
        return newEvent;
    }

    @DeleteMapping("/events/{id}")
    void deleteEvent(@PathVariable int id) {
        eventRepository.deleteById(id);
    }


}
