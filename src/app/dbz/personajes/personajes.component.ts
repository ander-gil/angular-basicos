import { Component, Input} from '@angular/core';
import {Personaje} from '../interfaces/interfaces'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})


export class PersonajesComponent{

  // @Input() person: any[] = [];

  get personajes(){
    return this.dbzservice.personajes;
  }

  constructor(private dbzservice:DbzService){  }

}
