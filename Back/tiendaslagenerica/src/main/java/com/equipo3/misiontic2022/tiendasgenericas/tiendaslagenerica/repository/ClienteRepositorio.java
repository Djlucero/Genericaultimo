package com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.model.Cliente;


public interface ClienteRepositorio extends MongoRepository<Cliente, String>{
	
	List<Cliente> findByCedulacliente(String cedulacliente);

	List<Cliente> findByNombrecliente(String nombrecliente);
	
	List<Cliente> findByDireccioncliente(String direccioncliente);
	
	List<Cliente> findByTelefonocliente(String telefonocliente);

	List<Cliente> findByEmailcliente(String emailcliente);

}