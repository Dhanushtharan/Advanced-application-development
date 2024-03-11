package com.boatapp.dhanush.Service;


import com.boatapp.dhanush.dto.request.PaymentRequest;
import com.boatapp.dhanush.dto.response.BasicResponse;

import com.boatapp.dhanush.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse>getAllUser();

    PaymentResponse createPay(PaymentRequest request);
}
