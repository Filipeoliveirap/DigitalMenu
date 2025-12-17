package com.digitalmenu.backend.controller;

import com.digitalmenu.backend.business.DTOs.usersDTOS.LoginRequestDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterResponseDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterRequestDTO;
import com.digitalmenu.backend.business.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/users")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;


}
