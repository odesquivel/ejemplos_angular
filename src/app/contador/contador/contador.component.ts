//esto es el decorador de la clase se utiliza para crear un componente
import {Component}  from '@angular/core';
@Component({
    selector:'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3><strong>La Base es {{base}}</strong></h3>
        <button (click)="operacion(base)">{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="operacion(-base)" >-{{base}}</button>
    `
})
export class ContadorComponent{
    title = 'ProyectoTest';
    numero:number=10;
    base:number=10;
    operacion(valor:number) {
        this.numero +=valor;
    }
}