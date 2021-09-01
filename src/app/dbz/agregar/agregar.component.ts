import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../personajes/interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

@Input('personaje') personaje:Personaje={
  nombre:'',
  poder:0
}


@Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();

agregar():void{
  
  console.log(this.personaje);
  this.onNuevoPersonaje.emit(this.personaje)
  this.personaje={
    nombre:'',
    poder:0
  }

}
  
}
