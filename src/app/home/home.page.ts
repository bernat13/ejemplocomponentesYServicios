import { Component } from '@angular/core';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista:any;
  constructor(miservicio: ContactoService) {


    this.lista = miservicio.getAll();
    console.log(this.lista)
  }



}
