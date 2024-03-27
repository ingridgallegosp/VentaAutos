import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { AutosService } from '../../shared/auto.service';
import { Auto } from '../../shared/auto.model';

@Component({
    selector: 'lista-autos',
    templateUrl: './lista-autos.component.html',
    styleUrl: './lista-autos.component.css'
})

export class ListaAutosComponent implements OnInit {
    tituloListaAutos: string = 'Lista de Autos';
    muestraImagen: boolean = false;
    listaAutos: any[] = [];
    listaAutosFiltrados: any[] = [];
    anchoImagen = 100;
    margenImagen = 10;

    faStar = faStar
    
    // al recbir el evento ejecuta
    onClickCalificacion( mensaje: string ): void {
        alert( "Dieron click en la calificacion: " + mensaje );
    }
    
    /* ngOnInit(): void {
        this.listaAutos = [
            {
                id: 1,
                marca: "Toyota",
                modelo: "Corolla",
                anio: 2020,
                color: "Blanco",
                kilometraje: 15000,
                precio: 25000,
                calificacion: 4,
                imageUrl: "assets/imagenAutos/1.jpg"
            },
            {
                id: 2,
                marca: "Honda",
                modelo: "Civic",
                anio: 2018,
                color: "Azul",
                kilometraje: 20000,
                precio: 22000,
                calificacion: 3.5,
                imageUrl: "assets/imagenAutos/2.jpg"
            },
            {
                id: 3,
                marca: "Ford",
                modelo: "Mustang",
                anio: 2019,
                color: "Gris",
                kilometraje: 18000,
                precio: 35000,
                calificacion: 2,
                imageUrl: "assets/imagenAutos/3.jpg"
            },
            {
                id: 4,
                marca: "Chevrolet",
                modelo: "Camaro",
                anio: 2017,
                color: "Rojo",
                kilometraje: 25000,
                precio: 30000,
                calificacion: 4,
                imageUrl: "assets/imagenAutos/4.jpg"
            },
            {
                id: 5,
                marca: "BMW",
                modelo: "Serie-3",
                anio: 2021,
                color: "Negro",
                kilometraje: 10000,
                precio: 40000,
                calificacion: 1,
                imageUrl: "assets/imagenAutos/5.jpg"
            } 
        ];

        //Servicios
        this.listaAutos = this._autosService.obtenListaAutos();
        this.listaAutosFiltrados = this.listaAutos;
    } */

    constructor(private _autosService: AutosService) {}

    ngOnInit(): void {
        // Llamada al servicio para obtener la lista de autos
        this._autosService.obtenListaAutos().subscribe(
            (autos: Auto[]) => {
                this.listaAutos = autos;
                this.listaAutosFiltrados = this.listaAutos;
            },
            (error) => {
                console.error('Error al obtener la lista de autos:', error);
                // Aquí podrías manejar el error, como mostrar un mensaje al usuario
            }
        );
    }
    
    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen
    }
    
    filtro: string = '';
    /* private _filtro: string = "";

    get filtro(): string {
        return this._filtro;
    }

    set filtro(filtro:string) {
        this.filtro = filtro;
        console.log(filtro)
    } */

    //filtro: string = '';

    // Función para filtrar la lista de autos
    filtrarAutos(): any[] {
        if (!this.filtro) {
            // Si no hay filtro, mostrar todos los autos
            return this.listaAutos;
        } else {
            // Filtrar los autos según el texto ingresado en el input
            return this.listaAutos.filter(auto =>
                auto.marca.toLowerCase().includes(this.filtro.toLowerCase()) ||
                auto.modelo.toLowerCase().includes(this.filtro.toLowerCase()) ||
                auto.color.toLowerCase().includes(this.filtro.toLowerCase())
            );
        }
    }

   /*  filtraAutos( filtrarPor: string ): void {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            ( auto: Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
        )
    } */

    //Servicios
    //constructor( private _autosService: AutosService ) {}
        
}
