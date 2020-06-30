import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAjoutRoutinePage } from './form-ajout-routine.page';

const routes: Routes = [
  {
    path: '',
    component: FormAjoutRoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAjoutRoutinePageRoutingModule {}
