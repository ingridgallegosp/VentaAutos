import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from "./auto.model";
import { map } from 'rxjs/operators'; 

@Injectable({
    providedIn: "root"
})
    
export class AutosService {
   
    //private apiUrl = 'https://epico.gob.ec/vehiculo/public/api/vehiculos/'; 
    private apiUrl = 'https://epico.gob.ec/vehiculo/public/api/'; 

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get(this.apiUrl + 'vehiculos/').pipe(
            map((response: any) => response.data) 
        );

    }

    obtenListaAutos(): Observable<Auto[]> {
        return this.getData(); 
    }
    
    obtenAuto(id: number): Observable<Auto> {
        //return this.http.get<Auto>(`${this.apiUrl}vehiculo/${id}`);  
        return this.http.get(`${this.apiUrl}vehiculo/${id}`).pipe(
            map((response: any) => response.data) 
        );
    } 
}