import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from '../../services/text-to-speech.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-to-speech',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-to-speech.component.html',
  styleUrl: './text-to-speech.component.css',
})
export class TextToSpeechComponent {
  text: string = '';
  historial: string[] = [];
  cargando: boolean = false;

  constructor(private textToSpeechService: TextToSpeechService) {}

  textToSpeech(text: string) {
    this.cargando = true;
    this.textToSpeechService.textToSpeech(text).subscribe((response) => {
      this.addTextToHistorial(URL.createObjectURL(response));
      this.cargando = false;
    });
  }

  addTextToHistorial(text: string) {
    this.historial.push(text);
  }

  requestAudio() {
    if (!this.text) {
      alert('Por favor, ingrese un texto para convertir a audio');
      return;
    }

    this.addTextToHistorial(this.text);
    this.textToSpeech(this.text);

    //reset
    this.text = '';
  }
}
