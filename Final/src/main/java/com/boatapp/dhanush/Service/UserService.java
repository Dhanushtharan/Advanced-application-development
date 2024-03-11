package com.boatapp.dhanush.Service;

import com.boatapp.dhanush.dto.response.BasicResponse;
import com.boatapp.dhanush.dto.response.UserResponse;

public interface UserService {
   BasicResponse<UserResponse>getAllUser();
}
