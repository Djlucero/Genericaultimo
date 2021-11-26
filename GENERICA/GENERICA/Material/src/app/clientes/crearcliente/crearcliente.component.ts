import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.scss']
})
export class CrearclienteComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/cliente";

  constructor(private objetohttp: HttpClient) { }

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    }
    );
  }
  cedulacliente!: string; 
  nombrecliente!: string; 
  direccioncliente!: string;
  telefonocliente!: string;
  emailcliente!: string;
  correcto!: number;

  codigoRespuesta!: number;
  postData() {
      this.objetohttp.post<any>(
      "http://localhost:8080/api/clientes",
      {
        cedulacliente: this.cedulacliente,
        nombrecliente:this.nombrecliente,
        direccioncliente: this.direccioncliente,
        emailcliente: this.emailcliente,
        telefonocliente: this.telefonocliente
      }, 
      
    
      { observe: 'response' }
    ).subscribe(response=>{

    
      
      this.codigoRespuesta=response.status;
      if (this.codigoRespuesta === 201) {
        this.correcto = 1;
      }
       this.cedulacliente="";
       this.nombrecliente="";
       this.direccioncliente="";
       this.emailcliente="";
       this.telefonocliente="";

     });
  }



}
