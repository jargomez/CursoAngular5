import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { ImpresoraModel, DepartamentoModel, UsuarioModel, Usuario } from '../datos.model';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  aDepartamentos: Array<DepartamentoModel>;
  oDepartamento: DepartamentoModel;
  aImpresoras: Array<ImpresoraModel>;
  oImpresora: ImpresoraModel;
  oUsuario: UsuarioModel;
  isColor: boolean;
  isClaro: boolean;
  @ViewChild('formTD') formulario: ElementRef;

  constructor() { }

  ngOnInit() {
    this.oUsuario = new Usuario('', '', '');

    this.aImpresoras = [
      {id: 1, nombre: 'HP'},
      {id: 2, nombre: 'Lexmark'},
      {id: 3, nombre: 'Canon'}
    ];

    this.aDepartamentos = [
      {id: 1, nombre: 'Ventas'},
      {id: 2, nombre: 'Marketing'},
      {id: 3, nombre: 'Compras'},
      {id: 4, nombre: 'Sistemas'}
    ];

    // console.log(this.formulario);
  }

  enviarForm() {
    console.log('Formulario enviado');
  }

  borrarForm() {
    // Puede usarse reset() o resetForm()
    // this.formulario.reset();
    console.log('Formulario borrado');
  }

}
