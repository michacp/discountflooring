import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-banner',
  templateUrl: './section-banner.component.html',
  styleUrls: ['./section-banner.component.css']
})
export class SectionBannerComponent {
  @Input() bannerImage!: string;   // URL de la imagen de fondo
  @Input() sectionTitle!: string;  // Título de la sección
  @Input() routes: { label: string, path: string }[] = [];  // Rutas (breadcrumbs)
}
