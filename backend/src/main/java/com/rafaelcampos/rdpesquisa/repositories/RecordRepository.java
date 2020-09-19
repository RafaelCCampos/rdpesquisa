package com.rafaelcampos.rdpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaelcampos.rdpesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
