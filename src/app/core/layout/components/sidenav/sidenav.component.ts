import { Component, ViewChild, computed, effect, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { AppStore } from '../../../store/app.store';
import modalidade from '../../../models/modalidade';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('drawer') drawer!: MatDrawer;
  private appStore = inject(AppStore);
  private router = inject(Router);
  public modalidades = computed<modalidade[]>(()=>this.appStore.modalidades());

  constructor() {

    effect(()=>{{
      this.appStore.expandeSideNav() ? this.drawer.toggle() : this.drawer.close();
    }});
  }

  ativaModalidade(modalidade: any) {
    this.appStore.updateAtivaModalidade(modalidade);
    this.router.navigate([modalidade.rota]);
  }

}
