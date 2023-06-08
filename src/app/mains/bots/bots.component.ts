import { Component, HostListener   } from '@angular/core';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent {
  isMenuVisible: boolean = true;
  isMenuToggleActive: boolean = false;

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= 1000) {
      this.isMenuVisible = false;
      this.isMenuToggleActive = true;
    } else {
      this.isMenuVisible = true;
      this.isMenuToggleActive = false;
    }
  }

  toggleMenu() {
    if (window.innerWidth <= 1000) {
      this.isMenuVisible = true;
      this.isMenuToggleActive = !this.isMenuToggleActive;
    } else {
      this.isMenuVisible = false;
      this.isMenuToggleActive = false;
    }
  }
}
