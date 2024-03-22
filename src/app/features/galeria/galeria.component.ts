import { FuncoesGaleria } from './../../shared/funcoes-galeria';
import { signal } from '@angular/core';
import titulo from '../../core/models/titulo';
import { GaleriaStore } from '../../core/store/galeria/galeria.store';
import { GaleriaService } from './../../core/services/galeria.service';
import { Component, OnInit, computed, inject } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  private galeriaStore = inject(GaleriaStore);
  private galeriaService = inject(GaleriaService);

  private limiteitens = signal(10);
  public indiceGaleria = signal(0);

  public galeria = computed<titulo[]>(() => {

    const galeriaOriginal = this.galeriaStore.galeria();
    const galeriaFiltrada = FuncoesGaleria.retornaGaleriaComFiltroTextoInput(galeriaOriginal, this.filtroTextoInput());
    const galeriaOrdenada = FuncoesGaleria.retornaGaleriaOrdenada(galeriaFiltrada, this.ordenamentoDaGaleria());
    const galeriaPaginada = FuncoesGaleria.retornaGaleriaPaginada(galeriaOrdenada, this.limiteitens());
    this.paginacaoGaleriaLenght = galeriaPaginada.length;

    return galeriaPaginada[this.indiceGaleria()];
  });

  public paginacaoGaleriaLenght = 0;

  public textoInput: string = '';
  public filtroTextoInput = signal<string>('');

  public ordenamentoDaGaleria = signal({albumIdCrescente: true, idCrescente: true});

  constructor() { }

  ngOnInit() {

    this.galeriaService.iniciarGaleria();
  }

  avancaPagina() {

    (this.paginacaoGaleriaLenght > this.indiceGaleria() + 1) ?
      this.indiceGaleria.set(this.indiceGaleria() + 1)
      : false;
  }

  retrocedePagina() {

    (this.indiceGaleria() > 0) ?
      this.indiceGaleria.set(this.indiceGaleria() - 1)
      : false;
  }

  limparInput() {
    this.textoInput = '';
    this.filtroTextoInput.set('');
  }

  atualizaFiltroTextoInput() {
    this.filtroTextoInput.set(this.textoInput || '');
  }



  // alteraLimiteItens(limite: number) {
  //   this.limiteitens.set(limite);
  // }

}
