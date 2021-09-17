import { HttpClient, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='tXzL1HZxve98715BdNtalJVnzAVF8Wj2';
  private servicioUrl:string='https://api.giphy.com/v1/gifs';
  private _historial:string[]=[];
  
  //TODO Hace el cambio de any por el tipo correspondiente
  public resultados:Gif[]=[];
  
  get historial(){
    return [...this._historial];
  }
  constructor(private http:HttpClient){
    //este constructor es singleton
    if(localStorage.getItem('historial')){
      this._historial=JSON.parse(localStorage.getItem('historial')!);
    }
    //esto es equivalente a lo de arriba
    //this._historial=JSON.parse(localStorage.getItem('histroial')!)|| []
    this.resultados=JSON.parse(localStorage.getItem('gifs')!)||[]
  }

  buscarGifts(query:string){
    query=query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    const params= new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','12')
      .set('q',query);
      console.log(params.toString()); 
    this.http.get<GifsResponse>(`${this.servicioUrl}/search`,{params:params})
    .subscribe((resp:GifsResponse) => {
      console.log(resp)
      this.resultados=resp.data;
      localStorage.setItem('gifs',JSON.stringify(this.resultados));
  
    })
  }
}
