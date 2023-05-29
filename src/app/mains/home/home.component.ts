import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  activeSectionIndex: number = 0;
  sections!: HTMLCollectionOf<Element>;
  timerInterval!: any;

  ngOnInit(): void {
    this.sections = document.getElementsByClassName('section');
    this.showSection(this.activeSectionIndex);
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  showSection(index: number): void {
    for (let i = 0; i < this.sections.length; i++) {
      if (i === index) {
        this.sections[i].classList.add('active');
      } else {
        this.sections[i].classList.remove('active');
      }
    }
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      this.goToNextSection();
    }, 10000);
  }

  stopTimer(): void {
    clearInterval(this.timerInterval);
  }

  goToPreviousSection(): void {
    this.activeSectionIndex = (this.activeSectionIndex - 1 + this.sections.length) % this.sections.length;
    this.showSection(this.activeSectionIndex);
    this.stopTimer();
    this.startTimer();
  }

  goToNextSection(): void {
    this.activeSectionIndex = (this.activeSectionIndex + 1) % this.sections.length;
    this.showSection(this.activeSectionIndex);
    this.stopTimer();
    this.startTimer();
  }
}

