import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PortalNoticiasComponent } from './components/portal-noticias/portal-noticias.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { CarSpecsComponent } from './components/car-specs/car-specs.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'traductor', component: TraductorComponent, title: 'Traductor' },
      {
        path: 'noticias',
        component: PortalNoticiasComponent,
        title: 'Últimas noticias',
      },
      {
        path: 'vehiculos',
        component: CarSpecsComponent,
        title: 'Especificaciones de vehículos',
      },
      { path: '**', redirectTo: 'traductor', pathMatch: 'full' },
    ],
  },
];
