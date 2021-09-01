import { Component } from '@angular/core';
import { Personaje } from '../personajes/interfaces/dbz.interface';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent{

  personajes:Personaje[]=[
    {
    nombre:'Goku',
    poder:1500
  },
  {
    nombre:'Vegeta',
    poder:8000
  }]
personaje:Personaje={
  nombre:"Hulk",
  poder:189
}

agregarNuevoPersonaje(personaje:Personaje){

  this.personajes.push(personaje);
}
}
