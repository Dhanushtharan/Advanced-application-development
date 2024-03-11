package com.boatapp.dhanush.UserRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


//import com.boatapp.dhanush.*;
import com.boatapp.dhanush.model.User;

public interface UserRepository extends JpaRepository<User,String> {
    Optional<User>findByEmail(String email);
   
}
