package com.maciej.security.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/secure")
public class SecureController {

    @GetMapping
    public ResponseEntity<String> secureEndpoint(){
        return ResponseEntity.ok("Secured!");
    }
}
