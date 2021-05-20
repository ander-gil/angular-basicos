import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',

})
export class ContadorComponent {

  titulo:string = 'App Contador';
  contador:number= 0;
  base:number= 5;

  acumula(valor: number){
    this.contador +=valor;
  }

}
