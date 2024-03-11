package com.boatapp.dhanush.Service;

import com.boatapp.dhanush.dto.request.RegisterRequest;
import com.boatapp.dhanush.dto.request.loginRequest;
import com.boatapp.dhanush.dto.response.LoginResponse;
import com.boatapp.dhanush.dto.response.RegisterResponse;

public interface AuthenticationService {
        RegisterResponse register (RegisterRequest request);

        LoginResponse login(loginRequest request);
}
