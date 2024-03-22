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

      galeria = galeria.sort((a: any, b: any) => ordemCrescente.idCrescente ?  a.id - b.id : b.id - a.id);
      galeria = galeria.sort((a: any, b: any) => ordemCrescente.albumIdCrescente ? a.albumId - b.albumId :  b.albumId - a.albumId);
      return galeria;
    }

    static retornaGaleriaComFiltroTextoInput(galeria: titulo[], filtroTextoInput: string = ''){

      const textoNormalizado = Utils.normalizarTexto(filtroTextoInput);

      if(!textoNormalizado || 'ALBUM '.includes(textoNormalizado))
        return galeria;


      const galeriaFilterId = galeria.filter(titulo => titulo.id.toString() == textoNormalizado);
      const galeriaFilterAlbumId = galeria.filter(titulo => titulo.albumId.toString() == (textoNormalizado.replace('ALBUM ', '')));
      const galeriaFilterTitle = galeria.filter(titulo => Utils.normalizarTexto(titulo.title).includes(textoNormalizado));
      let galeriaSemDuplicatas = [...galeriaFilterId, ...galeriaFilterAlbumId , ...galeriaFilterTitle].filter((valorAtual, index, array) => {
        return index === array.findIndex(valor => valor.id === valorAtual.id);
      });

      return galeriaSemDuplicatas;
    }
}
