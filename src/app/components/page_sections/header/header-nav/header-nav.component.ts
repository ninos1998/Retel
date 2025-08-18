import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

/**
 * Defines navigation area inside page headers
 */
@Component({
  selector: 'app-header-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
  standalone: true
})
export class HeaderNavComponent {
 constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}


  goToSection(page:string ,sectionId: string) {
  if (this.router.url.includes(page)) {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  } else {
    this.router.navigate([page]).then(() => {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    });
  }
}


}
