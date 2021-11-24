package com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.model.Usuario;


public interface UsuarioRepository extends MongoRepository<Usuario, String>{
	List<Usuario> findByUsername(String username);
	
    List<Usuario> findBynombreusuario(String nombreusuario);
	
	

}
