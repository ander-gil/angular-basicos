import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 15000,
    },
    {
      nombre: 'vegeta',
      poder: 9200,
    },
  ];

  get personajes():Personaje[] {
    return [...this._personajes]
  }
  constructor() {
    console.log('servicio inicializado');
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }
}
