import { Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { GaleriaComponent } from './features/galeria/galeria.component';
import { TopComponent } from './features/top/top.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'galeria',
        component: GaleriaComponent
      },
      {
        path: 'top',
        component: TopComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
