import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulated es el valor por defecto
})
export class BindingComponent implements OnInit {

  sNombre: string;

  constructor() { }

  ngOnInit() {
    this.sNombre = '';
  }

  borrar() {
    this.sNombre = '';
  }

}
