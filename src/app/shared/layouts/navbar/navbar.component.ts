import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault(); // Previene el comportamiento de recarga de la página
    const section = document.querySelector('#' + sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
