import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { FormsModule } from '@angular/forms';
import { LibrosService } from './libros.service';
import { MockLibrosAsyncComponent } from './mock-libros-async/mock-libros-async.component';
import { BuscarGoogleComponent } from './buscar-google/buscar-google.component';
import { BuscarGoogleServicioComponent } from './buscar-google-servicio/buscar-google-servicio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:
    [MainComponent,
    MockLibrosComponent,
    MockLibrosAsyncComponent,
    BuscarGoogleComponent,
    BuscarGoogleServicioComponent],
  providers: [
    LibrosService
  ],
  exports: [MainComponent]
})
export class MainModule { }
