import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    //Material Modules:
    MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule, MatProgressSpinnerModule, MatButtonModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidenavComponent],
})
export class LayoutModule { }
