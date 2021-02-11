package com.topheryun.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.topheryun.models.Burger;

public interface IBurgerDAO extends JpaRepository<Burger,Integer> {

	public List<Burger> findAll();
	
}
