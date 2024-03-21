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

  public paginacaoGaleria = computed<titulo[][]>(() => FuncoesGaleria.retornaGaleriaPaginada(this.galeriaStore.galeria(), this.limiteitens()));
  public galeriaExibir = computed<titulo[]>(() => this.paginacaoGaleria()[this.indiceGaleria()]);

  constructor() { }

  ngOnInit() {

    this.galeriaService.iniciarGaleria();
  }

  avancaPagina() {

    (this.paginacaoGaleria().length > this.indiceGaleria() + 1) ?
      this.indiceGaleria.set(this.indiceGaleria() + 1)
      : false;
  }

  retrocedePagina() {

    (this.indiceGaleria() > 0) ?
      this.indiceGaleria.set(this.indiceGaleria() - 1)
      : false;
  }

  // alteraLimiteItens(limite: number) {
  //   this.limiteitens.set(limite);
  // }

}
