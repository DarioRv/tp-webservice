import { Component } from '@angular/core';
import { TraduccionRequest } from '../models/traduccion-request.model';
import { FormsModule } from '@angular/forms';
import { GoogleTranslatorService } from '../services/google-translator.service';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css',
})
export class TraductorComponent {
  traduccionRequest: TraduccionRequest;
  resultado?: string;
  cargando = false;

  constructor(private traductorService: GoogleTranslatorService) {
    this.traduccionRequest = new TraduccionRequest();
  }

  enviar(): void {
    if (this.traduccionRequest.q === '') {
      alert('Por favor, ingrese un texto a traducir.');
      return;
    }

    // console.log(this.traduccionRequest);

    this.traducir(this.traduccionRequest);
  }

  traducir(traduccionRequest: TraduccionRequest): void {
    this.cargando = true;
    this.traductorService.traducir(traduccionRequest).subscribe({
      next: (traduccion) => {
        // console.log(traduccion.data.translations);
        this.resultado = traduccion.data.translations[0].translatedText;
        this.cargando = false;
      },
      error: () => {
        this.resultado = 'Error al traducir el texto.';
        this.cargando = false;
      },
    });
  }
}
