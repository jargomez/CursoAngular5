import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nPrecio: number;
  nValor: number;
  dFecha: Date;
  oDatos: object;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nPrecio = 25.5;
    this.nValor = 542.14111411;
    this.dFecha = new Date(); // new Date almacena la fecha de hoy en el formato específico de fechas
    this.oDatos =
      {
        sNombre : 'Pepe perez',
        nPrecio : 25.5,
        nValor : 542.14111411,
        dFecha : new Date()
      }
  }

}
