import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AEspacioPipe } from './shared/a-espacio.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ListaAutosComponent,
    AEspacioPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    
      CommonModule,
      FormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
