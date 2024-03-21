import { Injectable, signal } from "@angular/core";
import modalidade from "../models/modalidade";
import { routes } from "../../app.routes";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AppStore {

    //state ================================================================

    public readonly nomeAplicacao: string = 'Portal TEIA';
    public readonly administracaoApp: string = 'GEOPE';
    public readonly tituloAppHeader: string = 'Galeria TOP!';

    public expandeSideNav = signal<boolean>(false);
    public modalidades = signal<modalidade[]>([
      {icone: 'home', nome: 'Home', rota: 'home', ativo: true},
      {icone: 'account_tree', nome: 'Galeria', rota: 'galeria', ativo: false},
      {icone: 'thumb_up', nome: 'Em alta', rota: 'top', ativo: false},
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

      console.log('modalidades: ', this.modalidades());
    }
}
