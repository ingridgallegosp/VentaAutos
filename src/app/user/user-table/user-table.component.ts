import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

  datos: any;

  constructor(private apiService: UserService) {}

  ngOnInit(): void {
    this.apiService.getUser().subscribe(
      (data) => {
        this.datos = data;
        console.log('Datos recibidos:', this.datos);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
