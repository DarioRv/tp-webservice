import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasResponse } from '../interfaces/noticias-response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  obtenerUltimasNoticias(): Observable<NoticiasResponse> {
    const url = 'https://real-time-news-data.p.rapidapi.com/top-headlines';

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com',
    });

    const params = {
      country: 'AR',
      lang: 'es-419',
    };

    return this.http.get<NoticiasResponse>(url, { headers, params });
  }
}
