import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TachesPage } from './taches.page';

const routes: Routes = [
  {
    path: '',
    component: TachesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachesPageRoutingModule {}
