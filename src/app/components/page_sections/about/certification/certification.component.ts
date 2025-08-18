import { Component, Input } from '@angular/core';
import { CertificatBox2Component } from '@components/section_elements/boxes/certificat-box2/certificat-box2.component';

@Component({
  selector: 'app-certification',
    imports: [
      CertificatBox2Component
    ],
  standalone: true,
  
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {
  @Input() data: any;

}
