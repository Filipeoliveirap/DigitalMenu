package com.digitalmenu.backend.infrastructure.shared.exception.custom;

public class LoginException extends RuntimeException {
    public LoginException(String message) {
        super(message);
    }
}
