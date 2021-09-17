import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

get resultados():Gif[]{
  return this.gifService.resultados;
}
constructor(private gifService :GifsService){}
}
