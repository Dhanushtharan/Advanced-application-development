package com.boatapp.dhanush.Controller;

import static com.boatapp.dhanush.Utils.MyConstant.Auth;
import static com.boatapp.dhanush.Utils.MyConstant.LOGIN;
import static com.boatapp.dhanush.Utils.MyConstant.REGISTER;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boatapp.dhanush.Service.AuthenticationService;
import com.boatapp.dhanush.dto.request.RegisterRequest;
import com.boatapp.dhanush.dto.request.loginRequest;
import com.boatapp.dhanush.dto.response.LoginResponse;

import com.boatapp.dhanush.dto.response.RegisterResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Auth)
@RequiredArgsConstructor

public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN) 
    public ResponseEntity<LoginResponse> login(@RequestBody loginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
        response=authenticationService.login(request);
        return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response = LoginResponse.builder().message("Something went wrong!").token("").build();
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
