import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  saveTextToHistorial(item: string) {
    this._historial.push(item);
  }

  saveToLocalStorage() {
    localStorage.setItem('historial', JSON.stringify(this._historial));
  }

  loadFromLocalStorage() {
    const historial = localStorage.getItem('historial');
    if (historial) {
      this._historial = JSON.parse(historial);
    }
  }

  textToSpeech(text: string): Observable<string> {
    const url = 'https://open-ai-text-to-speech1.p.rapidapi.com/';
    const headers = {
      'X-RapidAPI-Key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'X-RapidAPI-Host': 'open-ai-text-to-speech1.p.rapidapi.com',
    };

    const body = {
      model: 'tts-1',
      input: text,
      voice: 'alloy',
    };

    return this.http.post(url, body, { headers, responseType: 'blob' }).pipe(
      map((res) => URL.createObjectURL(res)),
      tap((res) => {
        this.saveTextToHistorial(text);
        this.saveTextToHistorial(res);
        this.saveToLocalStorage();
      })
    );
  }
}
