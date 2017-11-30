import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;

  constructor() {
    this.aDatos = [
      'Angular en 30 minutos',
      'Fundamentos de Angular',
      'Angular Avanzado',
      'Angular 5'
    ];
  }

  buscarMock(clave: string) {
    return this.aDatos;
  }

  buscarMockAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        // cuando pasa el timeout (1000 ms en este caso), se ejecuta la función resolve y envía el array aDatos
        resolve(JSON.stringify(this.aDatos));
        },
        5000);
    });
  }

}
