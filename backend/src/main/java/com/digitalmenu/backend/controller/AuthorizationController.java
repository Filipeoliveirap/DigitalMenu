package com.digitalmenu.backend.controller;

import com.digitalmenu.backend.business.DTOs.usersDTOS.LoginRequestDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.LoginResponseDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterRequestDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterResponseDTO;
import com.digitalmenu.backend.business.service.UserService;
import com.digitalmenu.backend.infrastructure.repository.UserRepository;
import com.digitalmenu.backend.infrastructure.security.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthorizationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserService userService;

    //método para login
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO>login(@RequestBody @Valid LoginRequestDTO data) {
        LoginResponseDTO response = userService.login(data);
        return ResponseEntity.ok(response);
    }

    //método para registro
    @PostMapping("/register")
    public ResponseEntity<RegisterResponseDTO>register(@RequestBody @Valid RegisterRequestDTO data) {
        RegisterResponseDTO response = userService.register(data);
        return ResponseEntity.ok(response);

    }


}

