import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesPageRoutingModule } from './taches-routing.module';

import { TachesPage } from './taches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesPageRoutingModule
  ],
  declarations: [TachesPage]
})
export class TachesPageModule {}
