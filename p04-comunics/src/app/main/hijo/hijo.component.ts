import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() sNombre: string;
  @Output() eRespuesta: EventEmitter<string>;
  sNuevoNombre: string;

  constructor() {
    this.eRespuesta = new EventEmitter();
   }

  ngOnInit() { // aquí no sería el lugar de inicializar 'eRespuesta' porque es demasiado tarde
    // habría que ponerlo en el constructor o cuando se crea
    // this.eRespuesta = new EventEmitter();
    this.sNuevoNombre = '';
  }

  responder(s) {
    this.eRespuesta.emit(this.sNuevoNombre);
  }

}
