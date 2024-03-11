package com.boatapp.dhanush.Service;

import com.boatapp.dhanush.dto.request.BookingRequest;
import com.boatapp.dhanush.dto.response.BasicResponse;
import com.boatapp.dhanush.dto.response.BookingResponse;


public interface BookingService {
    BasicResponse<BookingResponse>getAllUser();

    BookingResponse createBook(BookingRequest request);

    BasicResponse<BookingResponse> deletebook(String giftid);

    BookingResponse updatebook(String giftid, BookingRequest giftRequest);
}
