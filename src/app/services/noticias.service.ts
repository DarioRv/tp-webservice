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
    const url = 'https://google-news13.p.rapidapi.com/latest';

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c0de160164mshea8f547cd603703p1e9558jsnb62e97ad5ec6',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com',
    });

    const params = {
      lr: 'es-AR',
    };

    return this.http.get<NoticiasResponse>(url, { headers, params });
  }
}
