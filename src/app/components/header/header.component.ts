import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { label: 'Traductor', routerLink: 'traductor' },
    { label: 'Noticias', routerLink: 'noticias' },
    { label: 'Vehículos', routerLink: 'vehiculos' },
  ];
}
