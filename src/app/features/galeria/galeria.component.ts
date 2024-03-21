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

  public galeria = computed<titulo[]>(() => this.galeriaStore.galeria());

  constructor() { }

  ngOnInit() {

    this.galeriaService.iniciarGaleria();
  }

}
