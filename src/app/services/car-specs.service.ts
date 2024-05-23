import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';
import { HttpClient } from '@angular/common/http';
import { Modelo } from '../interfaces/modelo.interface';

@Injectable({
  providedIn: 'root',
})
export class CarSpecsService {
  constructor(private http: HttpClient) {}

  obtenerMarcas(): Observable<Marca[]> {
    const url = 'https://car-specs.p.rapidapi.com/v2/cars/makes';

    const headers = {
      'X-RapidAPI-Key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
    };

    return this.http.get<Marca[]>(url, { headers });
  }

  obtenerModelos(idMarca: string): Observable<Modelo[]> {
    const url = `https://car-specs.p.rapidapi.com/v2/cars/makes/${idMarca}/models`;

    const headers = {
      'X-RapidAPI-Key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
    };

    return this.http.get<Modelo[]>(url, { headers });
  }
}
