import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from "../autos/auto.model";

@Injectable({
    providedIn: "root"
})
    
export class AutosService {
   
    private apiUrl = 'https://epico.gob.ec/vehiculo/public/api/vehiculo/'; 

    constructor(private http: HttpClient) { }

    getData(): Observable<Auto[]> {
        return this.http.get<Auto[]>(this.apiUrl); // Actualizado para devolver un array de Autos
    } 

    obtenListaAutos(): Observable<Auto[]> {
        return this.getData(); //  reutiliza el método getData() si obtienes la lista de autos de la misma manera
    }
    
    obtenAuto(id: number): Observable<Auto> {
        return this.http.get<Auto>(`${this.apiUrl}/${id}`); // Solicita un auto específico por su ID
    } 
}