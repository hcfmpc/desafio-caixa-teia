import { Component, computed, inject } from '@angular/core';
import { GaleriaStore } from '../../core/store/galeria/galeria.store';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {

  private galeriaStore = inject(GaleriaStore);
  public tituloSelecionado = computed(() => this.galeriaStore.tituloSelecionado());
}
