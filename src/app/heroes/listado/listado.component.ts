import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  superHeroes:string[] = ['spiderman', 'batman', 'superman', 'ironman'];
  heroeDelete:string[]=[];


  quitarHeroe(){
    const heroeBorrado = this.superHeroes.shift();
    this.heroeDelete.push(heroeBorrado || '');
  };


}
