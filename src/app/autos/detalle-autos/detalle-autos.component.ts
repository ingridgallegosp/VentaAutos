import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from '../../shared/auto.service';
import { Auto } from '../../shared/auto.model';

@Component({
    //selector: 'app-detalle-autos', ya no se usa como directiva sino con router
    templateUrl: './detalle-autos.component.html',
    styleUrls: ['./detalle-autos.component.css'] // Corrección en 'styleUrls'
})
export class DetalleAutosComponent implements OnInit {
    tituloPagina = "Detalle de Autos";
    auto: Auto | undefined;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _autosService: AutosService
    ) {}

    onBack(): void {
        this._router.navigate(['/autos']);
    }
     
    ngOnInit(): void {
        // Obtener el ID del auto de los parámetros de la ruta
        let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));

        // Llamar al servicio para obtener el auto por su ID
        this._autosService.obtenAuto(id).subscribe(
            (auto: Auto) => {
                this.auto = auto;
                if (this.auto) {
                    this.tituloPagina += ": " + this.auto.id;
                } else {
                    this.tituloPagina = "Auto no encontrado";
                }
            },
            (error) => {
                console.error('Error al obtener el auto:', error);
                this.tituloPagina = "Error al obtener el auto";
            }
        );
    } 
} 

    

