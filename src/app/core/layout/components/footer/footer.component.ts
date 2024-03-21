import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public readonly anoRodape: number;
  public readonly textoRodape: string = 'Autor: Elias de Almeida Jácome Filho';

  constructor() {
    this.anoRodape = new Date().getFullYear();
  }
}
