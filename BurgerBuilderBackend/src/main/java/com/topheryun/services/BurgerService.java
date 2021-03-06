package com.topheryun.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.topheryun.daos.IBurgerDAO;
import com.topheryun.models.Burger;

@Service
public class BurgerService {

	private IBurgerDAO burgerDAO;
	
	public BurgerService(IBurgerDAO burgerDAO) {
		super();
		this.burgerDAO = burgerDAO;
	}
	
	public void insertBurger(Burger burger) {
		burgerDAO.save(burger);
	}
	
	public List<Burger> getAllBurgers() {
		return burgerDAO.findAll();
	}

}
