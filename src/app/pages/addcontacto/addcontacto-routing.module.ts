import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcontactoPage } from './addcontacto.page';

const routes: Routes = [
  {
    path: '',
    component: AddcontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcontactoPageRoutingModule {}
