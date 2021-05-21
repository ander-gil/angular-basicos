import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componente principal
import { AppComponent } from './app.component';

// modulos importados
import { ContadorModule } from './contador/contador.mudule';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.mudule';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
