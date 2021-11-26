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
  urlapi: string = "http://localhost:8080/api/cliente";

    constructor(private objetohttp: HttpClient) { }

    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Error desconocido!';
      if (error.error instanceof ErrorEvent) {
        // Errores del lado del cliente
        errorMessage = `Error: ${error.error.message}\n ${error.status}`;
      } else {
        // Errores del lado del servidor
        errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
      }
      //MOSTRANDO UN ERROR EN UNA ALERTA
      //window.alert(errorMessage);
      return throwError(errorMessage);
    }
  

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

    
    this.res = this.objetohttp.get("http://localhost:8080/api/clientes/cedula/"+this.cedulacliente).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      
    });


}



}




