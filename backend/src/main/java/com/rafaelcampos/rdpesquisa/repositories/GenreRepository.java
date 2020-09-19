package com.rafaelcampos.rdpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaelcampos.rdpesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
