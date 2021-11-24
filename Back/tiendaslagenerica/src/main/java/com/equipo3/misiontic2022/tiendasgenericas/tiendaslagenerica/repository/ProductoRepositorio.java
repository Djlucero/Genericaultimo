package com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.model.Producto;


public interface ProductoRepositorio extends MongoRepository<Producto, String>{
	
	List<Producto> findByCodigoproducto(Long codigoproducto);
	
	List<Producto> findByNombreproducto(String nombreproducto);

}
