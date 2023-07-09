package com.maciej.security.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/secure")
public class SecureController {

    @GetMapping
    public ResponseEntity<List<String>> secureEndpoint(){
        return ResponseEntity.ok(List.of("Computer", "TV", "Sofa", "Whiteboard"));
    }
}
