import { Component } from '@angular/core';

@Component({
    selector: 'lista-autos',
    templateUrl: './lista-autos.component.html',
    //styleUrl: './app.component.css'
})


export class ListaAutosComponent {
    tituloListaAutos: string = 'Lista de Autos';
    
    muestraImagen: boolean = false;
    
    arregloAutos: string[] = ["one"];

    anchoImagen = 100;

    margenImagen = 10;
    
    listaAutos: any[] = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2020,
            color: "Blanco",
            kilometraje: 15000,
            precio: 25000,
            calificacion: 4,
            imageUrl: "/src/assets/imagenAutos/1.jpg"
        },
        {
            id: 2,
            marca: "Honda",
            modelo: "Civic",
            anio: 2018,
            color: "Gris",
            kilometraje: 20000,
            precio: 22000,
            calificacion: 3.5,
            imageUrl: "/src/assets/imagenAutos/2.jpg"
        },
        {
            id: 3,
            marca: "Ford",
            modelo: "Mustang",
            anio: 2019,
            color: "Rojo",
            kilometraje: 18000,
            precio: 35000,
            calificacion: 4,
            imageUrl: "/src/assets/imagenAutos/3.jpg"
        },
        {
            id: 4,
            marca: "Chevrolet",
            modelo: "Camaro",
            anio: 2017,
            color: "Azul",
            kilometraje: 25000,
            precio: 30000,
            calificacion: 4,
            imageUrl: "/src/assets/imagenAutos/4.jpg"
        },
        {
            id: 5,
            marca: "BMW",
            modelo: "Serie 3",
            anio: 2021,
            color: "Negro",
            kilometraje: 10000,
            precio: 40000,
            calificacion: 5,
            imageUrl: "/src/assets/imagenAutos/5.jpg"
        }
    ];

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen
    }

    filtro: string = '';

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
}
