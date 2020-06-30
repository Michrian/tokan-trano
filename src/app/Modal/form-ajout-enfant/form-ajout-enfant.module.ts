import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAjoutEnfantPageRoutingModule } from './form-ajout-enfant-routing.module';

import { FormAjoutEnfantPage } from './form-ajout-enfant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAjoutEnfantPageRoutingModule
  ],
  declarations: [FormAjoutEnfantPage]
})
export class FormAjoutEnfantPageModule {}
