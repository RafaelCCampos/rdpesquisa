package com.rafaelcampos.rdpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rafaelcampos.rdpesquisa.entities.Game;

//@Component
@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
