import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, TareasComponent],
  exports: [MainComponent]
})
export class MainModule { }
