import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    //selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.css'
})
  
export class RegistroComponent {
    tituloPagina = "Registro del Cliente";
    quiereContacto: boolean = false;

    constructor(private _router: Router,) { }

    ngOnInit(): void {
    }
    
    goInicio(): void {
        this._router.navigate([ '/inicio' ]);
    }

    registra(): void {
        alert( "En construccion" );
        this._router.navigate( ["/autos"] );
    }

    contacto(): void {
        this.quiereContacto = !this.quiereContacto
    }

}


