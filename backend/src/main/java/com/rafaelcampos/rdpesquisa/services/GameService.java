package com.rafaelcampos.rdpesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rafaelcampos.rdpesquisa.dto.GameDTO;
import com.rafaelcampos.rdpesquisa.entities.Game;
import com.rafaelcampos.rdpesquisa.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll() {
		List<Game> list = gameRepository.findAll();
		
		return list.stream().map(game -> new GameDTO(game)).collect(Collectors.toList());
	}
}
