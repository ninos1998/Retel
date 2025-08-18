import { Component } from '@angular/core';

@Component({
  selector: 'app-implantation',
  imports: [],
  templateUrl: './implantation.component.html',
  styleUrl: './implantation.component.css'
})
export class ImplantationComponent {
  images = [
    {
      src: 'assets/images/implantation/1.jpg',
      alt: 'Travailleurs sur site minier',
      hasOverlay: true,
      overlayText: 'Nous réalisons des projets à travers l\'Afrique'
    },
    {
      src: 'assets/images/implantation/2.jpg',
      alt: 'Compacteurs de sol',
      hasOverlay: false
    },
    {
      src: 'assets/images/implantation/3.jpg',
      alt: 'Excavatrice sur chantier',
      hasOverlay: false
    },
    {
      src: 'assets/images/implantation/4.jpg',
      alt: 'Bulldozer au travail',
      hasOverlay: false
    },
    {
      src: 'assets/images/implantation/5.jpg',
      alt: 'Construction routière',
      hasOverlay: false
    },
    {
      src: 'assets/images/implantation/6.jpg',
      alt: 'Camions de chantier',
      hasOverlay: false
    }
  ];

  constructor() { }
}
