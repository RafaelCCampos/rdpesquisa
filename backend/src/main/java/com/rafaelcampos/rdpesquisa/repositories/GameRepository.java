package com.rafaelcampos.rdpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaelcampos.rdpesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
