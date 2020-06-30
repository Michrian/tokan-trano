import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAjoutEnfantPage } from './form-ajout-enfant.page';

const routes: Routes = [
  {
    path: '',
    component: FormAjoutEnfantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAjoutEnfantPageRoutingModule {}
