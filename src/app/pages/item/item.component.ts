import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Descripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Descripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit() {

  this.route.params
    .subscribe( parametros => {

      this.productoService.getProducto(parametros['id'])
        .subscribe((Productos: Descripcion ) => {
          this.id = parametros['id'];
          this.producto = Productos;
        });
    });

  }

}
