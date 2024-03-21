import { Component, inject } from '@angular/core';

import { AppStore } from '../../../store/app.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public logoCaixaBranco: string = "assets/img/logo_caixa_branco.png"
  private appStore = inject(AppStore);

  expandirSideNav() {
    this.appStore.updateExpandeSideNav(!this.appStore.expandeSideNav());
  }
}
