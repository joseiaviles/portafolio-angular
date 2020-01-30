import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

   private cargarInfo() {
     // Leer al archivo json desde la data
     this.http.get( 'assets/data/data-pagina.json' )
      .subscribe( (resp: InfoPagina ) =>  {

        this.cargada = true;
        this.info = resp;


      });
   }

  private cargarEquipo() {

     // Leer al archivo json desde firebase
     this.http.get( 'https://angular-html-b199a.firebaseio.com/equipo.json' )
      .subscribe( (resp: any[] ) =>  {

        this.equipo = resp;
        console.log('producto'  + resp);
      });


  }

}

