import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcontactoPageRoutingModule } from './addcontacto-routing.module';

import { AddcontactoPage } from './addcontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddcontactoPageRoutingModule
  ],
  declarations: [AddcontactoPage]
})
export class AddcontactoPageModule {}
