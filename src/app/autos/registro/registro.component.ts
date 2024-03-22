import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  //selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
  
export class RegistroComponent {

  tituloPagina = "Registro del Cliente";

  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }
  
  goInicio(): void {
    this._router.navigate([ '/inicio' ]);
  }
}


