import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableaubordPageRoutingModule } from './tableaubord-routing.module';

import { TableaubordPage } from './tableaubord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableaubordPageRoutingModule
  ],
  declarations: [TableaubordPage]
})
export class TableaubordPageModule {}
