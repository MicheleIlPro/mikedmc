import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('menu') menuRef: ElementRef | undefined;
  @ViewChild('nav') navRef: ElementRef | undefined;

  toggleNav() {
    if (this.menuRef && this.navRef) {
      this.navRef.nativeElement.classList.toggle("active");
    }
  }
}
