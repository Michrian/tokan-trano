import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcoursInscriptionPage } from './parcours-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: ParcoursInscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcoursInscriptionPageRoutingModule {}
