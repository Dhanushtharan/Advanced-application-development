package com.boatapp.dhanush.Service.impl;


import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.boatapp.dhanush.Service.BoatService;
import com.boatapp.dhanush.UserRepository.BoatRepository;
import com.boatapp.dhanush.dto.request.BoatRequest;
// import com.boatapp.dhanush.dto.request.BookingRequest;
import com.boatapp.dhanush.dto.response.BasicResponse;
import com.boatapp.dhanush.dto.response.BoatResponse;
import com.boatapp.dhanush.dto.response.BookingResponse;
import com.boatapp.dhanush.model.Boat;
import com.boatapp.dhanush.model.Booking;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class BoatServiceImpl implements BoatService{
     private final BoatRepository boatRepository;
   
    @Override
public BasicResponse<BoatResponse> getAllUser() {
    List<Boat> users = boatRepository.findAll();

    List<BoatResponse> boatResponses = users.stream()
        .map((Boat boat) -> BoatResponse.builder()
              .id(boat.getId())
              .boatname(boat.getBoatname()) 
              .boatimage(boat.getBoatimage())
              .boatlocation(boat.getBoatlocation())
              .boatavailable(2)
              .price(boat.getPrice())
              .build())
        .collect(Collectors.toList());

    return BasicResponse.<BoatResponse>builder()
        .message("User Data fetched")
        .data(boatResponses)
        .build();
}

        @SuppressWarnings("null")
    @Override
    public BoatResponse createBoat(BoatRequest request) {
        var book = Boat.builder()
        .id(request.getId())
        .boatname(request.getBoatname()) 
        .boatimage(request.getBoatimage())
        .boatlocation(request.getBoatlocation())
        .boatavailable(3)
        .price(request.getPrice())
        .build();
        boatRepository.save(book);
        return BoatResponse.builder()  
        .message("Boat Booked sucessfully")  
                .build();
    }

}
