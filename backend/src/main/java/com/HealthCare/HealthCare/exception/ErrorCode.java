package com.HealthCare.HealthCare.exception;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
    UNAUTHENTICATED(9998, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    INVALID_KEY(1001, "Uncategorized error", HttpStatus.BAD_REQUEST),
    NOT_FOUND(1002, "Not found", HttpStatus.NOT_FOUND),
    EMAIL_EXISTED(1003, "Email already exists", HttpStatus.BAD_REQUEST),
    PHONE_EXISTED(1004, "Phone number already exists", HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(1005, "User not found", HttpStatus.NOT_FOUND),
    WRONG_PASSWORD(1006, "Incorrect password", HttpStatus.UNAUTHORIZED)
    ;


    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }

    int code;
    String message;
    HttpStatusCode statusCode;

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public HttpStatusCode getStatusCode() {
        return statusCode;
    }
}
