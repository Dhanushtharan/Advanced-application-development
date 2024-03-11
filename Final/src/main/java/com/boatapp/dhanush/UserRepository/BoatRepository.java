package com.boatapp.dhanush.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boatapp.dhanush.model.Boat;

public interface BoatRepository extends JpaRepository<Boat,String>{

}
