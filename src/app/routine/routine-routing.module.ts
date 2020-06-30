import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutinePage } from './routine.page';

const routes: Routes = [
  {
    path: 'routine',
    component: RoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutinePageRoutingModule {}
