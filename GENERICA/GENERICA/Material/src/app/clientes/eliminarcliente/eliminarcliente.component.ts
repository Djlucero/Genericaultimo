import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminarcliente',
  templateUrl: './eliminarcliente.component.html',
  styleUrls: ['./eliminarcliente.component.scss']
})
export class EliminarclienteComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/cliente";

  constructor(private objetohttp: HttpClient) { }

  ngOnInit(): void {  
    this.res = this.objetohttp.delete(this.urlapi);
    this.res.subscribe((data: []) => {
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
  deleteData() {
      this.objetohttp.delete(
      "http://localhost:8080/api/Clientes/"+this.cedulacliente,
             
      
    
     { observe: 'response' }
    ).subscribe(response=>{
      this.codigoRespuesta=response.status;

      if (this.codigoRespuesta === 200) {
        this.correcto = 1;
      }
       this.cedulacliente="";
     }
     );
  }



}
