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
      const section = this.sections[i] as HTMLElement;
      if (i === index) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
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
    const previousIndex = (this.activeSectionIndex - 1 + this.sections.length) % this.sections.length;
    const previousSection = this.sections[previousIndex] as HTMLElement;
    const currentSection = this.sections[this.activeSectionIndex] as HTMLElement;

    previousSection.classList.add('active', 'slideInLeft');
    currentSection.classList.remove('active', 'slideInRight', 'slideInLeft');

    this.activeSectionIndex = previousIndex;
    this.stopTimer();
    this.startTimer();
  }

  goToNextSection(): void {
    const nextIndex = (this.activeSectionIndex + 1) % this.sections.length;
    const nextSection = this.sections[nextIndex] as HTMLElement;
    const currentSection = this.sections[this.activeSectionIndex] as HTMLElement;

    nextSection.classList.add('active', 'slideInRight');
    currentSection.classList.remove('active', 'slideInRight', 'slideInLeft');

    this.activeSectionIndex = nextIndex;
    this.stopTimer();
    this.startTimer();
  }

  navigateToLink(link: string): void {
    window.location.href = link;
  }
}







// export class HomeComponent implements OnInit {
//   activeSectionIndex: number = 0;
//   sections!: HTMLCollectionOf<Element>;
//   timerInterval!: any;

//   ngOnInit(): void {
//     this.sections = document.getElementsByClassName('section');
//     this.showSection(this.activeSectionIndex);
//     this.startTimer();
//   }

//   ngOnDestroy(): void {
//     this.stopTimer();
//   }

//   showSection(index: number): void {
//     for (let i = 0; i < this.sections.length; i++) {
//       if (i === index) {
//         this.sections[i].classList.add('active');
//       } else {
//         this.sections[i].classList.remove('active');
//       }
//     }
//   }

//   startTimer(): void {
//     this.timerInterval = setInterval(() => {
//       this.goToNextSection();
//     }, 10000);
//   }

//   stopTimer(): void {
//     clearInterval(this.timerInterval);
//   }

//   goToPreviousSection(): void {
//     this.activeSectionIndex = (this.activeSectionIndex - 1 + this.sections.length) % this.sections.length;
//     this.showSection(this.activeSectionIndex);
//     this.stopTimer();
//     this.startTimer();
//   }

//   goToNextSection(): void {
//     this.activeSectionIndex = (this.activeSectionIndex + 1) % this.sections.length;
//     this.showSection(this.activeSectionIndex);
//     this.stopTimer();
//     this.startTimer();
//   }

//   navigateToLink(link: string): void {
//     window.location.href = link;
//   }

// }

