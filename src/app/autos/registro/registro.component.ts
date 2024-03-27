import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';


@Component({
    //selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.css'
})
  
export class RegistroComponent {
    tituloPagina = "Registro del Cliente";
    quiereContacto: boolean = false;
    cliente: any = { 
        //id: '',
        nombre: '',
        apellido:'',
        //password: '',
        //email: '',
        //telefono:'',
    }
    
    //constructor(private _router: Router,) { }

    ngOnInit(): void {
    }
    
    goInicio(): void {
        this._router.navigate([ '/inicio' ]);
    }

    
    /* registra(): void {
        alert( "En construccion" );
        this._router.navigate( ["/autos"] );
    } */

    constructor(private _router: Router, private userService: UserService) { }

    registra(): void {
        // Llama al método addUser de UserService para agregar un nuevo cliente
        this.userService.addUser(this.cliente).subscribe(
            (response) => {
                // Maneja la respuesta aquí si es necesario
                alert("Cliente registrado exitosamente");
                this._router.navigate(['/autos']);
            },
            (error) => {
                console.error('Error al registrar cliente:', error);
                // Maneja el error aquí si es necesario
                alert("Hubo un error al registrar el cliente");
            }
        );
    }

    contacto(): void {
        this.quiereContacto = !this.quiereContacto
    }

}


