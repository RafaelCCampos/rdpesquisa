package com.rafaelcampos.rdpesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafaelcampos.rdpesquisa.dto.RecordDTO;
import com.rafaelcampos.rdpesquisa.dto.RecordInsertDTO;
import com.rafaelcampos.rdpesquisa.entities.Game;
import com.rafaelcampos.rdpesquisa.entities.Record;
import com.rafaelcampos.rdpesquisa.repositories.GameRepository;
import com.rafaelcampos.rdpesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = recordRepository.save(entity);
		
		return new RecordDTO(entity);
	}
}
