import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
    
export class UserService {

    private apiUrl = '/epico.gob.ec/vehiculo/public/api/vehiculo'//'https://epico.gob.ec/vehiculo/';

    constructor(private http: HttpClient) {}

    getUser(): Observable<any> {
        return this.http.get(this.apiUrl);     
    }  
    getUserById(id:string): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id);   
    }
    
}