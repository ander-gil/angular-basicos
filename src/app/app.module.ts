import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componente principal
import { AppComponent } from './app.component';

// modulos importados
import { ContadorModule } from './contador/contador.mudule';
import { HeroesModule } from './heroes/heroes.mudule';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
