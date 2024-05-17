import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interfaces/marca.interface';
import { Modelo } from '../../interfaces/modelo.interface';
import { CarSpecsService } from '../../services/car-specs.service';

@Component({
  selector: 'app-car-specs',
  standalone: true,
  imports: [],
  templateUrl: './car-specs.component.html',
  styleUrl: './car-specs.component.css',
})
export class CarSpecsComponent implements OnInit {
  cargando = false;
  marcas: Marca[] = [];
  modelos: Modelo[] = [];
  cargandoModelos = false;

  constructor(private carSpecsService: CarSpecsService) {}

  ngOnInit(): void {
    this.cargarMarcas();
  }

  cargarMarcas() {
    this.cargando = true;
    this.carSpecsService.obtenerMarcas().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
        this.cargando = false;
      },
      error: (error) => {
        console.error(error);
        this.cargando = false;
      },
    });
  }

  onSelectMarca(id: string) {
    this.cargandoModelos = true;
    this.carSpecsService.obtenerModelos(id).subscribe({
      next: (modelos) => {
        this.modelos = modelos;
        this.cargandoModelos = false;
      },
      error: (error) => {
        console.error(error);
        this.cargandoModelos = false;
      },
    });
  }
}
