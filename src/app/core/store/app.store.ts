import { Injectable, signal } from "@angular/core";
import modalidade from "../models/modalidade";

@Injectable({
    providedIn: 'root'
})
export class AppStore {

    //state ================================================================

    public readonly nomeAplicacao: string = 'Portal TEIA';
    public expandeSideNav = signal<boolean>(false);
    public modalidades = signal<modalidade[]>([
      {icone: 'home', nome: 'Álbuns', ativo: true},
      {icone: 'account_tree', nome: 'Títulos', ativo: false},
    ])

    //mutations ================================================================

    public updateExpandeSideNav(payload: boolean) {
      this.expandeSideNav.set(payload);
    }

    public updateAtivaModalidade(payload: modalidade) {

      this.modalidades.update((modalidades: modalidade[]) => {

        const modalidadesAtualizada = modalidades;
        modalidadesAtualizada.forEach((mod: modalidade) => {
          mod.ativo = mod.nome === payload.nome;
        });

        return modalidadesAtualizada;
      });
    }
}
