import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {
  // controlador del componente

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Módulos en Angular';
  }

}
