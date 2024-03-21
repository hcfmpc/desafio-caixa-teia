import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-titulo',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-titulo.component.html',
  styleUrls: ['./card-titulo.component.scss'],

})
export class CardTituloComponent {

  @Input() titulo: any;

  get nomeAlbum(): string {
    return `Album ${this.titulo.albumId}`;
  }

  get nomeTitulo(): string {
    return `${this.titulo.id}. ${this.titulo.title}`;
  }

}
