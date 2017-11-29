import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { FormTdComponent } from './form-td/form-td.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, FormTdComponent],
  exports: [MainComponent]
})
export class MainModule { }
