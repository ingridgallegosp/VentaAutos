import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { RegistroComponent } from './autos/registro/registro.component';
import { NotFoundComponent } from './autos/not-found/not-found.component';

const routes: Routes = [
  { path: "autos", component: ListaAutosComponent },
  { path: "autos/:id", component: DetalleAutosComponent},
  { path: "inicio", component: InicioComponent },
  { path: "registro", component: RegistroComponent},
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
