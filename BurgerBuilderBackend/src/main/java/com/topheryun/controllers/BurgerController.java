package com.topheryun.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.topheryun.models.Burger;
import com.topheryun.services.BurgerService;

@RestController
@RequestMapping("/burger")
public class BurgerController {
	
	private BurgerService burgerService;
	
	public BurgerController(BurgerService burgerService) {
		super();
		this.burgerService = burgerService;
	}
	
	@PutMapping()
	public void insertBurger(@RequestBody Burger burger) {
		if (verifyBurger(burger)) {
			burgerService.insertBurger(burger);
		}
	}
	
	@GetMapping()
	public ResponseEntity<List<Burger>> getAllBurgers() {
		burgerService.getAllBurgers();
		// finish returning response entities
		return null;
	}
	
	private boolean verifyBurger(Burger burger) {
		if (burger == null || burger.getName() == null || burger.getName() == "") return false;
		else return true;
	}

}
