import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
private apiUrl = 'http://localhost:3000/api/cars';

  constructor() {
  }
}
