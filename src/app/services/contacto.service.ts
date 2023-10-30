import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  lista :any =[
    {
      "id":1,
      "nombre":"Bernat"
    },
    {
      "id":2,
      "nombre":"Miquel"
    }
  ]
  constructor() { }


  public getAll():any{
    return this.lista;
  } 
  public add(contacto:any){
  //  contacto.id=this.lista. +1;
this.lista.push(contacto);

  }


}
