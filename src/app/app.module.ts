import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListaAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
