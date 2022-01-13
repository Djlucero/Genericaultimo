import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  res: any;
  contenido: any;
  consecutivobd: any;
  urlapi: string = "http://localhost:8080/api/ventas/consecutivo";

    constructor(private objetohttp: HttpClient) { }

      

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data: any[]) => {
      this.consecutivobd = data;
      this.consecutivobd=this.consecutivobd+1;
      console.log(this.consecutivobd);
    }
    );
  }
  cedulacliente!: string; 
  codigoproducto!: number;
  codigoproducto1!: number;
  codigoproducto2!: number;
  nombreproducto!: string;
  nombreproducto1!: string;
  nombreproducto2!: string;
  nombrecliente!: string; 
  direccioncliente!: string;
  telefonocliente!: string;
  emailcliente!: string;
  correcto!: number;
  Idcliente!: String;
  
  ivacompra!: number;
  cantidad=0;
  cantidad1=0; 
  cantidad2=0; 
  ventatotalproducto=0;
  ventatotalproducto1=0;
  ventatotalproducto2=0;
  valortotalproducto=0;
  valortotalproducto1=0;
  valortotalproducto2=0;
  valorunitario=0;
  valorunitario1=0;
  valorunitario2=0;
  valoriva=0;
  valoriva1=0;
  valoriva2=0;
  consecutivo!: number;
  totalconiva!: number;
  totalventa!: number; 
  Ciudad!: String;
  totalventasciudad!: number;
  Idciudad!: String;
  

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

buscarConsolidado() {

    
  this.res = this.objetohttp.get("http://localhost:8080/api/consolidados/ciudad/"+this.Ciudad);

  //suscribe el archivo json y lo convierte   
  this.res.subscribe((datos: any[]) => {
    this.contenido = datos;
    console.log(this.contenido);
    this.totalventasciudad=this.contenido [0].totalventas;
    this.Idciudad=this.contenido [0].id;
    

  });


}
buscarProducto() {
  this.res = this.objetohttp.get("http://localhost:8080/api/producto/producto/"+this.codigoproducto);
    this.res.subscribe((datos: any[]) => {
    this.contenido = datos;
    console.log(this.contenido);
    this.codigoproducto=this.contenido [0].codigoproducto;
    this.nombreproducto=this.contenido [0].nombreproducto;
    this.valorunitario=this.contenido [0].preciocompra;
  });
  
}
buscarProducto1() {
  this.res = this.objetohttp.get("http://localhost:8080/api/producto/producto/"+this.codigoproducto1);
    this.res.subscribe((datos: any[]) => {
    this.contenido = datos;
    console.log(this.contenido);
    this.codigoproducto1=this.contenido [0].codigoproducto;
    this.nombreproducto1=this.contenido [0].nombreproducto;
    this.valorunitario1=this.contenido [0].preciocompra;
  });
  
}
buscarProducto2() {
  this.res = this.objetohttp.get("http://localhost:8080/api/producto/producto/"+this.codigoproducto2);
    this.res.subscribe((datos: any[]) => {
    this.contenido = datos;
    console.log(this.contenido);
    this.codigoproducto2=this.contenido [0].codigoproducto;
    this.nombreproducto2=this.contenido [0].nombreproducto;
    this.valorunitario2=this.contenido [0].preciocompra;
  });
  
}

calculo() {
this.ventatotalproducto= this.valorunitario * this.cantidad;
this.ventatotalproducto1= this.valorunitario * this.cantidad1;
this.ventatotalproducto2= this.valorunitario * this.cantidad2;
this.totalventa= this.ventatotalproducto + this.ventatotalproducto1 + this.ventatotalproducto2;
this.ivacompra= this.totalventa*19/100;
this.totalconiva= this.totalventa+this.ivacompra;
this.valoriva= this.ventatotalproducto*19/100;
this.valoriva1= this.ventatotalproducto1*19/100;
this.valoriva2= this.ventatotalproducto2*19/100;
this.valortotalproducto= this.ventatotalproducto+this.valoriva;
this.valortotalproducto1= this.ventatotalproducto1+this.valoriva1;
this.valortotalproducto2= this.ventatotalproducto2+this.valoriva2;

}


guardarconsolidado(){
  this.objetohttp.put<any>(
    "http://localhost:8080/api/consolidados/"+this.Idciudad,
    {
      ciudad: this.Ciudad,
      id:this.Idciudad,
      totalventas: this.totalventasciudad+1
      
    }, 
   

    { observe: 'response' }
  ).subscribe(response=>{

  

   });
}
  

confirmarventa() {
  this.objetohttp.post<any>(
  "http://localhost:8080/api/ventas",
  {
    cedulacliente: this.cedulacliente,
    codigoventa:this.consecutivobd,
    ciudad: this.Ciudad,
    detalleventa: [
    {
      cantidadproducto:this.cantidad,
      codigoproducto: this.codigoproducto,
      valoriva:this.valoriva,
      valortotal:this.ventatotalproducto,
      valorventa:this.valortotalproducto
    },
    {
      cantidadproducto:this.cantidad1,
      codigoproducto: this.codigoproducto1,
      valoriva:this.valoriva1,
      valortotal:this.ventatotalproducto1,
      valorventa:this.valortotalproducto1
    },
    {
      cantidadproducto:this.cantidad2,
      codigoproducto: this.codigoproducto2,
      valoriva:this.valoriva2,
      valortotal:this.ventatotalproducto2,
      valorventa:this.valortotalproducto2,
      
    }

    ],
     ivaventa: this.ivacompra,
     totalventa: this.totalventa,
     valorventa: this.totalventa

  }, 
  
  
 
  { observe: 'response' }
).subscribe(response=>{


  
  this.codigoRespuesta=response.status;
  if (this.codigoRespuesta === 201) {
    this.correcto = 1;
  }
   this.codigoproducto=0;
   this.codigoproducto1=0;
   this.codigoproducto2=0 ;
   this.nombreproducto="";
   this.nombreproducto1="";
   this.nombreproducto2="";
   this.cantidad=0;
   this.cantidad1=0;
   this.cantidad2=0;
   this.valortotalproducto=0;
   this.valortotalproducto1=0;
   this.valortotalproducto2=0;
 });
}

reload() {
  window.location.reload()
}

}
