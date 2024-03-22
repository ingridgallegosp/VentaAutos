import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';

@NgModule({
   declarations: [
      AppComponent, 
      ListaAutosComponent,
      AEspacioPipe,
      NotFoundComponent,
      InicioComponent,
      EstrellasComponent
   
   ],

   imports: [
      BrowserModule,
      AppRoutingModule, 
      CommonModule,
      FormsModule,
      FontAwesomeModule
   ],
   
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
