export default class modalidade {

    icone: string;
    nome: string;
    ativo: boolean;

    constructor(icone: string, nome: string, ativo: boolean) {
      this.icone = icone;
      this.nome = nome;
      this.ativo = ativo;
    }
}
