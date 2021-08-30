import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {
 heroes :string[]=['Oscar','Spiderman'];
 heroeBorrado:string ="";


  borrar():void{

    this.heroeBorrado=this.heroes.pop() ||''
  }
}
