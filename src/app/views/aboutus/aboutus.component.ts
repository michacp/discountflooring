import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  breadcrumbRoutes = [
    { label: 'Home', path: '/' },
    { label: 'Nosotros', path: '/nosotros' }
  ];
}
