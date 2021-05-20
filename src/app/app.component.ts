import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'App Contador';
  contador:number= 0;
  base:number= 5;

  acumula(valor: number){
    this.contador +=valor;
  }


}
