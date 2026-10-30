import { Routes } from '@angular/router';

import { authGuard } from './guards/auth-guard';

import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: 'login',

    loadComponent: () => import('./login/login').then((m) => m.Login),
  },

  {
    path: 'produtos',

    loadComponent: () =>
      import('./pages/lista-produtos/lista-produtos').then((m) => m.ListaProdutos),
  },

  {
    path: 'painel-adm',

    loadComponent: () => import('./painel-admin/painel-admin').then((m) => m.PainelAdm),

    canActivate: [authGuard, adminGuard],
  },

  {
    path: '**',
    redirectTo: 'produtos',
  },
];
