import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../personajes/interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

@Input('personaje') personaje:Personaje={
  nombre:'',
  poder:0
}

constructor(private dbzService:DbzService){
   
}
//@Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();

agregar():void{
  this.dbzService.agregarPersonaje(this.personaje);
  console.log(this.personaje);
  //this.onNuevoPersonaje.emit(this.personaje)
  this.personaje={
    nombre:'',
    poder:0
  }

}
  
}
