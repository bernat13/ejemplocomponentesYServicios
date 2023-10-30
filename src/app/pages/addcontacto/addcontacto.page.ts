import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-addcontacto',
  templateUrl: './addcontacto.page.html',
  styleUrls: ['./addcontacto.page.scss'],
})
export class AddcontactoPage implements OnInit {

  formu = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    nombre:new FormControl('',[Validators.required,Validators.minLength(4)]),
  })
  formu2 = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)]),
  })
  constructor(private scont : ContactoService) {


   }

  ngOnInit() {
  }
  submit(){

    console.log(this.formu.value)
    this.scont.add(this.formu.value);
    console.log(this.scont.getAll());
  }
}
