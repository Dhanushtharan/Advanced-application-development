package com.boatapp.dhanush.Controller;


import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import static com.boatapp.dhanush.Utils.MyConstant.Boat;
import static com.boatapp.dhanush.Utils.MyConstant.UserBoat;
import static com.boatapp.dhanush.Utils.MyConstant.postboat;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boatapp.dhanush.Service.BoatService;
import com.boatapp.dhanush.Service.BookingService;
import com.boatapp.dhanush.dto.request.BoatRequest;
import com.boatapp.dhanush.dto.request.BookingRequest;
import com.boatapp.dhanush.dto.request.PaymentRequest;
import com.boatapp.dhanush.dto.response.BasicResponse;
import com.boatapp.dhanush.dto.response.BoatResponse;
import com.boatapp.dhanush.dto.response.BookingResponse;
import com.boatapp.dhanush.dto.response.PaymentResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Boat)
@RequiredArgsConstructor
public class BoatController {
    private final BoatService boatService;
    

    @GetMapping(UserBoat)
    public ResponseEntity<BasicResponse<BoatResponse>> getUser(){
        BasicResponse<BoatResponse> response=new BasicResponse<>();
        try{
            response=boatService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

       @PostMapping(postboat)
    public ResponseEntity<BoatResponse> createPayment(@RequestBody BoatRequest request) {
        BoatResponse response = new BoatResponse();
        try {
            response = boatService.createBoat(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
