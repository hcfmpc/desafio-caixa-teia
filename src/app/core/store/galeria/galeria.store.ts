import { Injectable, signal } from "@angular/core";
import titulo from "../../models/titulo";

@Injectable({
  providedIn: 'root'
})
export class GaleriaStore {

  //state ================================================================

  public galeria = signal<titulo[]>([]);
  public tituloSelecionado = signal<string>('');

  //mutations ================================================================

  public updateGaleria(payload: titulo[]) {
    this.galeria.set(payload);
  }

  public selecionarTitulo(payload: string) {
    this.tituloSelecionado.set(payload);
  }
}
