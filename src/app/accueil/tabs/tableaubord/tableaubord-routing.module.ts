import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableaubordPage } from './tableaubord.page';

const routes: Routes = [
  {
    path: '',
    component: TableaubordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableaubordPageRoutingModule {}
