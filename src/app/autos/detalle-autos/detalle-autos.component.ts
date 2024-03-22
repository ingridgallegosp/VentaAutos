import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AutosService } from '../../shared/auto.service';

@Component({
    //selector: 'app-detalle-autos', ya no se usa como directiva sino con router
    templateUrl: './detalle-autos.component.html',
    styleUrl: './detalle-autos.component.css'
})
    
export class DetalleAutosComponent implements OnInit {
    tituloPagina = "Detalle de Autos"

  //desplegar el detalle con cada modelo de auto
 constructor( private _activatedRoute: ActivatedRoute,
      private _router: Router,
     /* private _autosService: AutosService*/ ) {}
    onBack(): void {
    this._router.navigate([ '/autos' ]);
    }
     
     ngOnInit(): void {
    /*let id = Number( this._activatedRoute.snapshot.paramMap.get('id') );
    //this.auto = this._autosService.obtenAuto(id);
    this.tituloPagina += ": " + id;
    */
    } 
}
