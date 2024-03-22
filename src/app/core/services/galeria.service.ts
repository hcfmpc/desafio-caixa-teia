import { Injectable, computed, inject } from '@angular/core';

import { HttpService } from '../http/http.service';
import { AppStore } from '../store/app.store';
import { GaleriaStore } from '../store/galeria/galeria.store';
import { FuncoesGaleria } from '../../shared/funcoes-galeria';
import Titulo from '../models/titulo';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private appStore = inject(AppStore);
  private galeriaStore = inject(GaleriaStore);
  private httpService = inject(HttpService);

  private modalidadeSelecionada = computed(() => this.appStore.modalidades().find(mod => mod.ativo));

  iniciarGaleria() {

    this.atualizarGaleria();
  }

  atualizarGaleria(objFiltro?: any) {

    const queryRequisicaoComFiltro = FuncoesGaleria.retornaQueryRequisicao(objFiltro);

    this.httpService.get(queryRequisicaoComFiltro)
    .subscribe({
      next: (galeria: Titulo[]) => {

        Array.isArray(galeria) ?
          this.galeriaStore.updateGaleria(galeria)
          : console.log('Erro: Não foi possível listar os títulos na galeria');

      }, error: (error: any) => { console.log('Erro ao buscar galeria', error) }
    });

  }
}
