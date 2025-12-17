package com.digitalmenu.backend.business.mapper;

import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterRequestDTO;
import com.digitalmenu.backend.business.DTOs.usersDTOS.RegisterResponseDTO;
import com.digitalmenu.backend.infrastructure.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    //metodo que mapeia o dto para entity(transforma o dto em entidade)
    public User toEntity(RegisterRequestDTO dto){
        return User.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .password(dto.getPassword())
                .type(dto.getType())
                .build();
    }

    //metodo que mapeia a entidade para dto(transforma a entidade em dto)
    public RegisterResponseDTO toResponse(User user) {
        return new RegisterResponseDTO(
                user.getName()
        );
    }

}
