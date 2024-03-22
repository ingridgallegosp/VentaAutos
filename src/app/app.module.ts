import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { InicioComponent } from './autos/inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
//import { RouterModule } from '@angular/router';
import { RegistroComponent } from './autos/registro/registro.component';
import { NotFoundComponent } from './autos/not-found/not-found.component';

@NgModule({
   declarations: [
      AppComponent, 
      AEspacioPipe,
      EstrellasComponent,
      InicioComponent,
      RegistroComponent,
      ListaAutosComponent,
      DetalleAutosComponent,
      NotFoundComponent,
   ],


   imports: [
      BrowserModule,
      AppRoutingModule, 
      CommonModule,
      FormsModule,
      FontAwesomeModule,
      //Router
      /* RouterModule.forRoot([
         { path: "autos", component: ListaAutosComponent },
         { path: "autos/:id", component: DetalleAutosComponent },
         { path: "inicio", component: InicioComponent },
         { path: "registro", component: RegistroComponent},
         { path: "", redirectTo: "inicio", pathMatch: "full" },
         //{ path: "**", redirectTo: "notFound", pathMatch: "full" }
         { path: "**", component: NotFoundComponent, pathMatch: "full" }

      ]), */ 
   ],
   
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
