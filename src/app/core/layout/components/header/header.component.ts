import { Component, computed, inject } from '@angular/core';

import { AppStore } from '../../../store/app.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public logoCaixaBranco: string = "assets/img/logo_caixa_branco.png"
  private appStore = inject(AppStore);
  public administracaoApp: string = this.appStore.administracaoApp;
  public tituloAppHeader: string = this.appStore.tituloAppHeader;

  alternarSideNav() {
    this.appStore.updateExpandeSideNav(!this.appStore.expandeSideNav());
  }
}
