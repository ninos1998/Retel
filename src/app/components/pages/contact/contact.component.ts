import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

/**
 * Defines functional view for 'Contact' page.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    GoogleMapsModule
  ]
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 36.85663461449873, lng: 10.207528355822964 }; // Exemple : Tunis
  zoom = 14;
}
