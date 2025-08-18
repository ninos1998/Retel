import { Component, Input, input } from '@angular/core';
import { DomaineBoxComponent } from '@components/section_elements/boxes/domaine-box/domaine-box.component';
import { PagesService } from '@services/pages.service';

@Component({
  selector: 'app-domaines',
  imports: [DomaineBoxComponent],
  templateUrl: './domaines.component.html',
  styleUrl: './domaines.component.css'
})
export class DomainesComponent {
  _data = new PagesService().getDomaines();

}