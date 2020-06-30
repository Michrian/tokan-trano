import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcoursInscriptionPageRoutingModule } from './parcours-inscription-routing.module';

import { ParcoursInscriptionPage } from './parcours-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcoursInscriptionPageRoutingModule
  ],
  declarations: [ParcoursInscriptionPage]
})
export class ParcoursInscriptionPageModule {}
