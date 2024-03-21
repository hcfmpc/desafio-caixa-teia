import { Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { GaleriaComponent } from './features/galeria/galeria.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'galeria',
        component: GaleriaComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
