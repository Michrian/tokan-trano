import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAjoutRoutinePageRoutingModule } from './form-ajout-routine-routing.module';

import { FormAjoutRoutinePage } from './form-ajout-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAjoutRoutinePageRoutingModule
  ],
  declarations: [FormAjoutRoutinePage]
})
export class FormAjoutRoutinePageModule {}
