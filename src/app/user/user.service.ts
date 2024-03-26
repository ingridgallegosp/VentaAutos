import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
    
export class UserService {

    //'https://epico.gob.ec/vehiculo/';
    private apiUrl = '/epico.gob.ec/vehiculo/public/api/cliente/'

    constructor(private http: HttpClient) { }
    

    getUser(): Observable<any> {
        return this.http.get(this.apiUrl);     
    }  

    getUserById(id:string): Observable<any> {
        return this.http.get(this.apiUrl + '/' + id);   
    }
    
    deleteUser(id: string) {
        return this.http.delete(this.apiUrl + '/' + id);
    }

    updateUser(id: string, nuevosDatos: any) {
        return this.http.put(this.apiUrl + '/' + id, nuevosDatos);
    }

    addUser(nuevosDatos: any) {
        return this.http.post(this.apiUrl, nuevosDatos);
    }
}