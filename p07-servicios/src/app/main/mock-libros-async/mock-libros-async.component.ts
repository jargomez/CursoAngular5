import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros-async',
  templateUrl: './mock-libros-async.component.html',
  styleUrls: ['./mock-libros-async.component.css'],
})
export class MockLibrosAsyncComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(public librosService: LibrosService) {

  }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {
    console.log('Inicio método buscar async');
    this.librosService.buscarMockAsync(this.sClave)
      .then(JSON.parse) // esto para parsear el 'response'
      .then(
        (response) => {
          console.log('Ejecutando método buscar async'),
          this.aLibros = response; }, // función en caso de OK
        () => {} // función en caso de error
      );
    this.sClave = '';
  }

}
