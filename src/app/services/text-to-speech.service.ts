import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  constructor(private http: HttpClient) {}

  textToSpeech(text: string): Observable<any> {
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

    return this.http.post(url, body, { headers, responseType: 'blob' });

    // return of(
    //   'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
    // ).pipe(delay(2000));
  }
}
