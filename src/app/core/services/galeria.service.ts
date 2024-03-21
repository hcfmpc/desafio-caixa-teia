import { Injectable, computed, inject } from '@angular/core';

import { HttpService } from '../http/http.service';
import { AppStore } from '../store/app.store';
import { GaleriaStore } from '../store/galeria/galeria.store';
import { FuncoesGaleria } from '../../shared/funcoes-galeria';

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
    .subscribe(galeria => {
      this.galeriaStore.updateGaleria(galeria);
    });
  }
}
