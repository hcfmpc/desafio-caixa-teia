export default class Modalidade {

    icone: string;
    nome: string;
    rota: string;
    ativo: boolean;

    constructor(icone: string, nome: string, rota: string, ativo: boolean) {
      this.icone = icone;
      this.nome = nome;
      this.rota = rota;
      this.ativo = ativo;
    }
}
