import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-ventaxcliente',
  templateUrl: './ventaxcliente.component.html',
  styleUrls: ['./ventaxcliente.component.scss']
})
export class VentaxclienteComponent implements OnInit {

  res: any;
  contenido: any;
  consecutivobd: any;
  urlapiGET: string = "http://localhost:8080/api/clientes";
  dtTrigger: any;
  objetohttp: any;
  
    //FUNCIÓN DE CONTROL DE ERRORES
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
  
    //aliminando objeto revisor de cambios de la tabla
    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }
  
    ///////////////// METODOS ANGULAR /////////////////////////////
  
    //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA
    ngOnInit(): void {
      //utilizando el servicio en la url
      this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));
  
      //suscribe el archivo json y lo convierte   
      this.res.subscribe((datos: any[]) => {
        this.contenido = datos;
        console.log(this.contenido);
        
      });
  
      //Opciones especiales de la tabla, localización y caracteristicas
      
    }
  
  
  }