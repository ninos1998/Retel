import { Component } from '@angular/core';
import { About3Component } from '@sections/home/home3/about3/about3.component';
import { Specializations4Component } from '@sections/about/specializations4/specializations4.component';
import { Team3Component } from '@sections/about/team3/team3.component';
import { Story1Component } from '@sections/home/home3/story1/story1.component';
import { PagesService } from '@services/pages.service';
import { HomeService } from '@services/home.service';
import { OurValue1Component } from '@components/page_sections/home/home1/our-value1/our-value1.component';

/**
 * Defines functional view for About-Us page.
 */
@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html',
  styleUrls: ['./about-us1.component.css'],
  standalone: true,
  imports: [
    About3Component,
    Specializations4Component,
    Team3Component,
    Story1Component,
    OurValue1Component
  ]
})
export class AboutUs1Component {

  /**
   * Constructor
   */
  constructor() {
  }

  _data = new PagesService().getAboutData();

  _data2 = new HomeService().getHome2Data();
  

}
