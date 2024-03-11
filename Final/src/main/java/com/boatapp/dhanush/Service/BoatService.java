package com.boatapp.dhanush.Service;

import com.boatapp.dhanush.dto.request.BoatRequest;
import com.boatapp.dhanush.dto.response.BasicResponse;
import com.boatapp.dhanush.dto.response.BoatResponse;

public interface BoatService {

    BasicResponse<BoatResponse> getAllUser();

    BoatResponse createBoat(BoatRequest request);

}
