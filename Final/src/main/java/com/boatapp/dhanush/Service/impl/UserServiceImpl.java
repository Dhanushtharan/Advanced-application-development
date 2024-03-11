package com.boatapp.dhanush.Service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.boatapp.dhanush.Service.UserService;
import com.boatapp.dhanush.UserRepository.UserRepository;
import com.boatapp.dhanush.dto.response.BasicResponse;

import com.boatapp.dhanush.dto.response.UserResponse;

import com.boatapp.dhanush.model.User;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    
    
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users= userRepository.findAll();
        List<UserResponse> userResponses= users.stream().map(user -> UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .password(user.getPassword())
        .role(user.getRole())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
        .message("User Data fetched").data(userResponses).build();
    }

}