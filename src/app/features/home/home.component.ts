import { Component, inject } from '@angular/core';
import { AppStore } from '../../core/store/app.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private appStore = inject(AppStore);
  public urlFoto: string = 'assets/img/imgUserDefault.png';

  expandirSideNav() {
    this.appStore.updateExpandeSideNav(!this.appStore.expandeSideNav());
  }
}
