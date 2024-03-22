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

  public galeriaCarregada = computed(() => this.galeriaStore.galeria().length > 0);
  public itensPorPagina: string = '10';
  private limiteItensPorPagina = signal<number>(10);
  public indiceGaleria = signal<number>(0);

  public galeria = computed<titulo[]>(() => {

    const galeriaOriginal = this.galeriaStore.galeria();
    const galeriaFiltrada = FuncoesGaleria.retornaGaleriaComFiltroTextoInput(galeriaOriginal, this.filtroTextoInput());
    const galeriaOrdenada = FuncoesGaleria.retornaGaleriaOrdenada(galeriaFiltrada, this.ordenamentoDaGaleria());
    const galeriaPaginada = FuncoesGaleria.retornaGaleriaPaginada(galeriaOrdenada, this.limiteItensPorPagina());
    this.paginacaoGaleriaLenght = galeriaPaginada.length;

    // console.log('dados', {
    //   paginacaoGaleriaLenght: this.paginacaoGaleriaLenght,
    //   indiceGaleria: this.indiceGaleria(),
    //   limiteItensPorPagina: this.limiteItensPorPagina(),
    //   itensPorPagina: this.itensPorPagina,
    //   ordenamentoDaGaleria: this.ordenamentoDaGaleria(),
    // });

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

  irParaPagina(pagina: number) {

    this.indiceGaleria.set(pagina);
  }

  limparInput() {
    this.textoInput = '';
    this.filtroTextoInput.set('');
  }

  atualizaFiltroTextoInput() {
    this.filtroTextoInput.set(this.textoInput || '');
  }

  atualizaLimiteItensPorPagina(novoLimite: string){
    this.limiteItensPorPagina.set(parseInt(novoLimite));
    this.indiceGaleria.set(0); // volta para a primeira página ao alterar o limite de itens por página
  }

  atualizaOrdenamentoDaGaleria(ordem: string) {

    this.ordenamentoDaGaleria.update(ordenamentoAtual => {
      return {
        albumIdCrescente: ordem === 'albumId' ? !ordenamentoAtual.albumIdCrescente : ordenamentoAtual.albumIdCrescente,
        idCrescente: ordem === 'id' ? !ordenamentoAtual.idCrescente : ordenamentoAtual.idCrescente
      }
    })
  }

  scrollToTop() {
    document.getElementsByTagName('app-galeria')[0].parentElement?.scrollTo({top: 0,  behavior: "smooth"});
  }
}
