import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Response } from '@angular/http/src/http';

@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css'],
})
export class BuscarGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  // constructor(public http: Http) {  }
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.aLibros = [];
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.sClave = '';
    this.http.get(url).toPromise()
      .then((response: any) => {
        console.log(response);
        response.items.forEach(
          elem => this.aLibros.push(elem.volumeInfo.title)
        );
      });
  }

  // Método que aplica observables
  btnBuscarRx() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.sClave = '';
    this.http.get(url).subscribe((response: any) => {
        console.log(response);
        response.items.forEach(
          elem => this.aLibros.push(elem.volumeInfo.title)
        );
      });
  }
}
