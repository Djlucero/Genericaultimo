import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://localhost:8080/api/cliente";
  
  constructor(private objetohttp: HttpClient) { }

  ngOnInit() {
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
  

  codigoRespuesta!: number;
  postData() {
      this.objetohttp.post<any>(
      "http://localhost:8080/api/cliente",
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

     });
  }

}
