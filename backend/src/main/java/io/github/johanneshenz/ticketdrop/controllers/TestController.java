package io.github.johanneshenz.ticketdrop.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController 
@CrossOrigin 
public class TestController {
    
    @GetMapping("/")
    public String hello() {
        return "This comes from the Backend. Lets goooo";
    }
}
