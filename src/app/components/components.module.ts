import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { FotoComponent } from './foto/foto.component';



@NgModule({
  declarations: [ContactoComponent,FotoComponent],
  exports:[ContactoComponent,FotoComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
