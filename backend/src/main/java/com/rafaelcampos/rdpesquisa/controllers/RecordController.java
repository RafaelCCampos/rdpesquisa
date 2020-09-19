package com.rafaelcampos.rdpesquisa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rafaelcampos.rdpesquisa.dto.RecordDTO;
import com.rafaelcampos.rdpesquisa.dto.RecordInsertDTO;
import com.rafaelcampos.rdpesquisa.services.RecordService;

@Controller
@RequestMapping("/records")
public class RecordController {
	
	@Autowired
	private RecordService recordService;
	
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto) {
			
		RecordDTO newDTO = recordService.insert(dto);
		
		return ResponseEntity.ok().body(newDTO);
	}

}
