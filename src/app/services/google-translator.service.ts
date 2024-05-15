import { Injectable } from '@angular/core';
import { TraduccionRequest } from '../models/traduccion-request.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TraduccionResponse } from '../models/traduccion-response.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleTranslatorService {
  constructor(private http: HttpClient) {}

  traducir(
    traduccionRequest: TraduccionRequest
  ): Observable<TraduccionResponse> {
    const url =
      'https://google-translate1.p.rapidapi.com/language/translate/v2';

    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    });

    const body = new HttpParams()
      .set('q', traduccionRequest.q)
      .set('source', traduccionRequest.source)
      .set('target', traduccionRequest.target);

    return this.http.post<TraduccionResponse>(url, body, {
      headers,
    });
  }
}
