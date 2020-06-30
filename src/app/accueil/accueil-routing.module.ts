import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilPage } from './accueil.page';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilPage,
    children: [
      {
        path: 'tableaubord',
        loadChildren: () => import('./tabs/tableaubord/tableaubord.module').then( m => m.TableaubordPageModule)
      },
      {
        path: 'enfant',
        loadChildren: () => import('./tabs/enfant/enfant.module').then(m => m.EnfantPageModule)
      },
      {
        path: 'taches',
        loadChildren: () => import('./tabs/taches/taches.module').then(m => m.TachesPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('./tabs/chats/chats.module').then(m => m.ChatsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'accueil/tableaubord',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilPageRoutingModule { }
