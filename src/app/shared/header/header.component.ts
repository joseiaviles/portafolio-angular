import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/infoPagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( public _servicio: InfoPaginaService,
               private router: Router ) { }

  ngOnInit() {
  }

  buscarProducto( termino: string ) {

    // console.log(termino);

    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);
  }

}
