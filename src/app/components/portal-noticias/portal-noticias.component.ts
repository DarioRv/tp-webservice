import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { DatePipe } from '@angular/common';
import { Noticia } from '../../interfaces/noticias-response.interface';

@Component({
  selector: 'app-portal-noticias',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './portal-noticias.component.html',
  styleUrl: './portal-noticias.component.css',
})
export class PortalNoticiasComponent implements OnInit {
  noticias: Noticia[] = [];
  cargando = false;

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias(): void {
    this.cargando = true;
    this.noticiasService.obtenerUltimasNoticias().subscribe({
      next: (response) => {
        this.noticias = response.items;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener noticias', error);
        this.cargando = false;
      },
    });
  }
}
