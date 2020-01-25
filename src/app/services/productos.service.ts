import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor( private http: HttpClient ) {

    this.cargarProductos() ;

  }


  public cargarProductos() {

    this.http.get('https://angular-html-b199a.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[] )  => {
          console.log(resp);
          this.cargando = false;
        });
  }

}

