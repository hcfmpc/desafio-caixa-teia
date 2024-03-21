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
}
