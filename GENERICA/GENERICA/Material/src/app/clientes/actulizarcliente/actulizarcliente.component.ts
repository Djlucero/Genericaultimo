import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-actulizarcliente',
  templateUrl: './actulizarcliente.component.html',
  styleUrls: ['./actulizarcliente.component.scss']
})
export class ActulizarclienteComponent implements OnInit {
  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/clientes";

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
  Idcliente!: String;

  codigoRespuesta!: number;
  postData() {
      this.objetohttp.put<any>(
      "http://localhost:8080/api/clientes/"+this.Idcliente,
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
      if (this.codigoRespuesta === 200) {
        this.correcto = 2;
      }
       this.cedulacliente="";
       this.nombrecliente="";
       this.direccioncliente="";
       this.emailcliente="";
       this.telefonocliente="";

     });
  }



  buscarData() {

    
    this.res = this.objetohttp.get("http://localhost:8080/api/clientes/cedula/"+this.cedulacliente);

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.Idcliente=this.contenido [0].id;
      this.nombrecliente=this.contenido [0].nombrecliente;
      this.cedulacliente=this.contenido [0].cedulacliente;
      this.direccioncliente=this.contenido [0].direccioncliente;
      this.telefonocliente=this.contenido [0].telefonocliente;
      this.emailcliente=this.contenido [0].emailcliente;
      //console.log(this.nombrecliente)

    });


}



}




