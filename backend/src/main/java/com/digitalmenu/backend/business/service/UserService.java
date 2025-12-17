package com.digitalmenu.backend.business.service;

import com.digitalmenu.backend.business.DTOs.usersDTOS.LoginRequestDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.LoginResponseDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterRequestDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterResponseDTO;
import com.digitalmenu.backend.business.mapper.UserMapper;
import com.digitalmenu.backend.infrastructure.model.User;
import com.digitalmenu.backend.infrastructure.security.TokenService;
import com.digitalmenu.backend.infrastructure.repository.UserRepository;
import com.digitalmenu.backend.infrastructure.shared.exception.custom.LoginException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final TokenService tokenService;

    //Metodo de lógica para registro de usuário
    public RegisterResponseDTO register (RegisterRequestDTO dto ) {
        if (repository.findByEmail(dto.getEmail()) != null) {
            throw new IllegalArgumentException("Email ja cadastrado");
        }

        User user = userMapper.toEntity(dto);
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        repository.save(user);

        return userMapper.toResponse(user);

    }

    //Metodo de lógica para login de usuário
    public LoginResponseDTO login(LoginRequestDTO dto) {
        try {
            var authToken =  new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getPassword());

            var auth = authenticationManager.authenticate(authToken);

            var user = (User) auth.getPrincipal();

            var token = tokenService.generateToken(user);

            return new LoginResponseDTO(
                    user.getName(),
                    token
            );

        } catch (Exception e) {
            throw new LoginException("Email ou senha inválidos");
        }

    }



}
