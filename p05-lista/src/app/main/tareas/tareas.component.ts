import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: Array<string>;
  sTarea: string;


  constructor() {
  }

  // localStorage es de HTML5 para almacenar datos; parecido a las cookies
  ngOnInit() {
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    } else {
      this.aTareas = [];
    }
  }

  addTareas() {
    this.aTareas.push(this.sTarea);
    this.actualizarStorage();
    this.sTarea = '';
  }

  deleteTarea(i: number) {
    this.aTareas.splice(i, 1);
    this.actualizarStorage();
  }

  private actualizarStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }

}
