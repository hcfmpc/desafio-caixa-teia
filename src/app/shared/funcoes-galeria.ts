import titulo from "../core/models/titulo";
import { Utils } from "./utils";

export class FuncoesGaleria {

    static retornaQueryRequisicao(filtro: any = {}) {

        let queryRequisicao = '';

        if (filtro.id) {

            queryRequisicao = `?id=${filtro.id}`;

        } else if (filtro.albumId) {

            queryRequisicao = `?albumId=${filtro.albumId}`;

        }else if (filtro.title) {

            queryRequisicao = `?title=${filtro.title}`;
        }

        return queryRequisicao;
    }

    static retornaGaleriaPaginada(galeria: any, size: number) {

      return Array.from({length: Math.ceil(galeria.length / size)}, (v, i) =>
        galeria.slice(i * size, i * size + size)
      );
    }

    static retornaGaleriaOrdenada(galeria: any, ordemCrescente: {albumIdCrescente: boolean, idCrescente: boolean}) {

      if(ordemCrescente.idCrescente) {
        galeria = galeria.sort((a: any, b: any) => ordemCrescente ?  a.id - b.id : b.id - a.id);
      }

      if(ordemCrescente.albumIdCrescente){
        galeria = galeria.sort((a: any, b: any) => ordemCrescente ? a.albumId - b.albumId :  b.albumId - a.albumId);
      }

      return galeria;
    }

    static retornaGaleriaComFiltroTextoInput(galeria: titulo[], filtroTextoInput: string = ''){

      return (filtroTextoInput === '' ) ?
          galeria
          : galeria.filter(titulo => titulo.id.toString() == Utils.normalizarTexto(filtroTextoInput) || Utils.normalizarTexto(titulo.title).includes(Utils.normalizarTexto(filtroTextoInput)));
    }
}
