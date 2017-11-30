import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-buscar-google-servicio',
  templateUrl: './buscar-google-servicio.component.html',
  styleUrls: ['./buscar-google-servicio.component.css'],
})
export class BuscarGoogleServicioComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public libros: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = [];
    this.libros.buscar(this.sClave)
    .then((response) => {
      this.aLibros = response;
    });
  }

}
