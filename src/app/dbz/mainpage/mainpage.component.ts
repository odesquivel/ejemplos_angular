import { Component } from '@angular/core';
import { Personaje } from '../personajes/interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent{


personaje:Personaje={
  nombre:"Hulk",
  poder:189
}

constructor(private dbzService:DbzService){
}
}
