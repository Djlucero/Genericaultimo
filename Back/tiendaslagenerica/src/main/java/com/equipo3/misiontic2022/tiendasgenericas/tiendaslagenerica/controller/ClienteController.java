package com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.model.Cliente;
import com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.repository.ClienteRepositorio;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class ClienteController {

	@Autowired
	ClienteRepositorio clienteRepository;

	@GetMapping("/cliente")
	public ResponseEntity<List<Cliente>> getAllCliente(@RequestParam(required = false) String cedulacliente) {
		try {
			List<Cliente> cliente = new ArrayList<Cliente>();

			if (cedulacliente == null) {
				clienteRepository.findAll().forEach(cliente::add);
			} else {
				clienteRepository.findByCedulacliente(cedulacliente).forEach(cliente::add);
			}

			if (cliente.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(cliente, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/cliente/{id}")
	public ResponseEntity<Cliente> getClienteById(@PathVariable("id") String id) {
		Optional<Cliente> clienteData = clienteRepository.findById(id);

		if (clienteData.isPresent()) {
			return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/cliente")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			Cliente _cliente = clienteRepository.save(
					new Cliente(client.getCedulacliente(), client.getNombrecliente(), client.getDireccioncliente(), client.getTelefonocliente(),
							client.getEmailcliente()));
			return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/cliente/{id}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable("id") String id, @RequestBody Cliente user) {
		Optional<Cliente> clienteData = clienteRepository.findById(id);

		if (clienteData.isPresent()) {
			Cliente _Cliente = clienteData.get();
			_Cliente.setCedulacliente(user.getCedulacliente());
			_Cliente.setNombrecliente(user.getNombrecliente());
			_Cliente.setDireccioncliente(user.getDireccioncliente());
			_Cliente.setTelefonocliente(user.getTelefonocliente());
			_Cliente.setEmailcliente(user.getEmailcliente());
			
			
			return new ResponseEntity<>(clienteRepository.save(_Cliente), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/Cliente/{id}")
	public ResponseEntity<HttpStatus> deleteCliente(@PathVariable("id") String id) {
		try {
			clienteRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/Cliente")
	public ResponseEntity<HttpStatus> deleteAllCliente() {
		try {
			clienteRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/cliente/{cedula_cliente}")
	public ResponseEntity<List<Cliente>> findByUsername(@PathVariable("cedula_cliente") String nombre) {
		try {
			List<Cliente> cliente = clienteRepository.findByCedulacliente(nombre);

			if (cliente.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(cliente, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
