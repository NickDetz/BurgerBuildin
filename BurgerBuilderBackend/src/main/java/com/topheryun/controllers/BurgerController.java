package com.topheryun.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.topheryun.models.Burger;
import com.topheryun.services.BurgerService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/burger")
public class BurgerController {
	
	private BurgerService burgerService;
	
	public BurgerController(BurgerService burgerService) {
		super();
		this.burgerService = burgerService;
	}
	
	@PostMapping()
	public void insertBurger(@RequestBody Burger burger) {
		if (verifyBurger(burger)) {
			burgerService.insertBurger(burger);
		}
	}
	
	@GetMapping()
	public ResponseEntity<List<Burger>> getAllBurgers() {
		List<Burger> burgerList = burgerService.getAllBurgers();
		if (burgerList.size() > 0) 
			return ResponseEntity.status(200).body(burgerList);
		else return ResponseEntity.status(418).build();
	}
	
	private boolean verifyBurger(Burger burger) {
		if (burger == null || burger.getName() == null || burger.getName() == "") return false;
		else return true;
	}

}
