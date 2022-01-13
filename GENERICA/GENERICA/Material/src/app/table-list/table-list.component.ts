import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

 
  //Función constructora
  constructor(private objetohttp: HttpClient, private fileUploadService: FileUploadService) { }

  ///////////////// GET /////////////////////////////
  //opciones y objeto revisor de la tabla
  
  dtTrigger: Subject<any> = new Subject<any>();

  //variable receptora de documentos
  res: any;
  //variable contenedora de contenidos
  contenido: any;
  //url api get
  urlapiGET: string = "http://localhost:8080/api/productos";


  

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

  ///////////////// POST /////////////////////////////
  res2: any;

  //lista que almacenara los resultados de la insercion de cada linea
  resultados: any;

  // Variable to store shortLink from api response
  file!: File; //variable para almacenar los datos

    // En caso de seleccionar archivo, escojer el primer archivo
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // Cuandop haga click, iniciar proceso de envio
  async onUpload() {
    console.log(this.file);
    this.resultados = await this.fileUploadService.upload(this.file);
    console.log(this.resultados);
  }

}