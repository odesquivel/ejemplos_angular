import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    nombre:string="ironMan"
    edad:number=45
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    cambiarNombre():void{
        this.nombre="Oscar";
    }
    cambiarEdad():void{
        this.edad=41;
    }

}