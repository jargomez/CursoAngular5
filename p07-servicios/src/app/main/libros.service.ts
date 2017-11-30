import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;
  sURL: string;

  constructor(public http: HttpClient) {
    this.aDatos = [
      'Angular en 30 minutos',
      'Fundamentos de Angular',
      'Angular Avanzado',
      'Angular 5'
    ];
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
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

  buscar(clave: string) {
    const URL = this.sURL + clave;
    const aLibros: Array<string> = [];
    return this.http.get(URL).toPromise()
    .then((response: any) => {
      response.items.forEach(
        element => { aLibros.push(element.volumeInfo.title); }
        );
      return aLibros;
    });
  }

}
