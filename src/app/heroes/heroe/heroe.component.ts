import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent {

    nombre: string= 'spiderman';
    edad  : number= 29;


     get nombreCapitalizado() :string {
      return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${this.nombre} - edad  ${this.edad}`;
    }

    cambiarNombre():void{
      this.nombre = 'Anderson Gil';
    }

    cambiarEdad():void{
      this.edad = 18;
    }


  }



