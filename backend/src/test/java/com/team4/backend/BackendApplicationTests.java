package com.team4.backend;

import com.team4.backend.model.Event;
import com.team4.backend.repository.EventRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class BackendApplicationTests {

    @Autowired
    private EventRepository eventRepository;

    @Test
    public void test() {

        List<Event> events = eventRepository.findAll();

        events.forEach(event -> System.out.println(event));
    }

}
