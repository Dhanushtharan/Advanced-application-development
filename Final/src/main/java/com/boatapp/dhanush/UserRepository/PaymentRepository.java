package com.boatapp.dhanush.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

// import com.boatapp.dhanush.*;
import com.boatapp.dhanush.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String> {

}
