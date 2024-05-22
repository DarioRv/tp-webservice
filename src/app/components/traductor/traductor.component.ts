import { Component } from '@angular/core';
import { TraduccionRequest } from '../../models/traduccion-request.model';
import { FormsModule } from '@angular/forms';
import { GoogleTranslatorService } from '../../services/google-translator.service';
import { Language } from '../../interfaces/language.interface';

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
  lenguajesDisponibles: Language[] = this.traductorService.lenguajesDisponibles;

  constructor(private traductorService: GoogleTranslatorService) {
    this.traduccionRequest = new TraduccionRequest();
  }

  enviar(): void {
    if (this.traduccionRequest.q === '') {
      alert('Por favor, ingrese un texto a traducir.');
      return;
    }

    this.traducir(this.traduccionRequest);
  }

  traducir(traduccionRequest: TraduccionRequest): void {
    this.cargando = true;
    this.traductorService.traducir(traduccionRequest).subscribe({
      next: (traduccion) => {
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
