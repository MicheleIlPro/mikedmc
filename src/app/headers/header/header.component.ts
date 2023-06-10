import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @ViewChild('menu') menuRef: ElementRef | undefined;
  // @ViewChild('nav') navRef: ElementRef | undefined;

  // toggleNav() {
  //   if (this.menuRef && this.navRef) {
  //     this.navRef.nativeElement.classList.toggle("active");
  //   }
  // }

  @ViewChild('menu') menuRef: ElementRef | undefined;
  @ViewChild('nav') navRef: ElementRef | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveClass();
      }
    });
  }

  toggleNav() {
    if (this.menuRef && this.navRef) {
      this.navRef.nativeElement.classList.toggle("active");
    }
  }

  updateActiveClass() {
    const currentUrl = this.router.url;
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        if (href === currentUrl) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

}
