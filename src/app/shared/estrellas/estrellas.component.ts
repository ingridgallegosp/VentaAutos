import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'estrellas',
    templateUrl: './estrellas.component.html',
    styleUrl: './estrellas.component.css'
})
export class EstrellasComponent implements OnChanges {
    faStar = faStar;
    estrellasCalificacion: any[] = [];

    // Funcion onclick
    onClick(stars: number): void {
        this.starsClick.emit( "Calificación: " + stars );
    }
    
    @Input() calificacion: number = 0;
    @Output() starsClick = new EventEmitter<string>();

    constructor() { }
    // revisa los cambios en el numero de estrellas 
    ngOnChanges(changes: SimpleChanges): void {
        this. estrellasCalificacion = [];
        for( var i = 1; i<= this.calificacion; i++ ){
        this. estrellasCalificacion.push(1);
        }
    }
}
