import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { GaleriaComponent } from './galeria.component';
import { CardTituloComponent } from '../../shared/components/card-titulo/card-titulo.component';
import { MatButton } from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    CardTituloComponent,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule,
    MatButton
  ],
  declarations: [
    GaleriaComponent,
  ]
})
export class GaleriaModule { }
