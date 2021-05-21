import { Component, OnInit } from '@angular/core';
import {Personaje} from '../interfaces/interfaces'
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {


   nuevo:Personaje={
    nombre:'maestro roschi',
    poder:100
  }


  constructor(){ }

}
