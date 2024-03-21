import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaComponent } from './galeria.component';
import { CardTituloComponent } from '../../shared/components/card-titulo/card-titulo.component';



@NgModule({
  declarations: [
    GaleriaComponent,

  ],
  imports: [
    CommonModule,
    CardTituloComponent
  ]
})
export class GaleriaModule { }
