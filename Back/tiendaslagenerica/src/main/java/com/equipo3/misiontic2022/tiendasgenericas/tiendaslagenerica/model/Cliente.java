package com.equipo3.misiontic2022.tiendasgenericas.tiendaslagenerica.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clientes")
public class Cliente {
	
	@Id
	private String id;	
	
	
	private long cedulacliente;
	private String nombrecliente;
	private String direccioncliente;
	private long telefonocliente;
	private String emailcliente;
	
	public Cliente() {
		
	}
	
	public Cliente(Long cedulacliente, String nombrecliente, String direccioncliente, long telefonocliente,
			String emailcliente) {
		super();
		this.cedulacliente = cedulacliente;
		this.nombrecliente = nombrecliente;
		this.direccioncliente = direccioncliente;
		this.telefonocliente = telefonocliente;
		this.emailcliente = emailcliente;
		
	}

		
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public long getCedulacliente() {
		return cedulacliente;
	}
	public void setCedulacliente(long cedulacliente) {
		this.cedulacliente = cedulacliente;
	}
	public String getNombrecliente() {
		return nombrecliente;
	}
	public void setNombrecliente(String nombrecliente) {
		this.nombrecliente = nombrecliente;
	}
	public String getDireccioncliente() {
		return direccioncliente;
	}
	public void setDireccioncliente(String direccioncliente) {
		this.direccioncliente = direccioncliente;
	}
	public long getTelefonocliente() {
		return telefonocliente;
	}
	public void setTelefonocliente(long telefonocliente) {
		this.telefonocliente = telefonocliente;
	}
	public String getEmailcliente() {
		return emailcliente;
	}
	public void setEmailcliente(String emailcliente) {
		this.emailcliente = emailcliente;
	}
	
	

	
	
	
	

	
	

}
