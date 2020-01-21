import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/infoPagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public infoService: InfoPaginaService ) { }

  ngOnInit() {
  }

}
