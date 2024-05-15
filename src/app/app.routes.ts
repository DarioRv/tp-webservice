import { Routes } from '@angular/router';
import { TraductorComponent } from './traductor/traductor.component';
import { PortalNoticiasComponent } from './portal-noticias/portal-noticias.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';

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
      { path: '**', redirectTo: 'traductor', pathMatch: 'full' },
    ],
  },
];
