import { Component,OnInit } from '@angular/core';

interface Card {
  imagePath: string;
  authorName: string;
  link?: string;
  iconPath?: string;
}

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit{


  cards: Card[] = [
  {imagePath: 'https://img4.goodfon.com/original/1024x1024/0/3b/devushka-anime-iukata-zakolka.jpg',
  authorName: 'zastavki.com',
  link: '#',
  iconPath: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png'},{
    imagePath: 'https://www.zastavki.com/pictures/1024x1024/2019Anime_Anime_Girl_Nao_Tomori_with_White_Hair_137501_31.jpg',
    authorName: 'zastavki.com',
    link: '#',
    iconPath: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png'},{
      imagePath: 'https://cdn.discordapp.com/attachments/1092419304177270824/1104799932164096112/00002-3755594171.png',
      authorName: '',
      link: 'http://example.com',
      iconPath: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png'},{
        imagePath: 'https://img.animeunity.tv/anime/bx150672-2WWJVXIAOG11.png',
        authorName: 'U cazz',
        link: 'http://example.com',
        iconPath: 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png',
      },
      {
        imagePath: '../../../assets/publicita/soro1.jpg',
        authorName: 'Babbycake',
        link: 'https://www.instagram.com/babbycake.sofia/',
        iconPath: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
      },
      {
        imagePath: '../../../assets/publicita/soro2.jpg',
        authorName: 'Babbycake',
        link: 'https://www.instagram.com/babbycake.sofia/',
        iconPath: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
      },
      {
        imagePath: '../../../assets/publicita/soro3.jpeg',
        authorName: 'Babbycake',
        link: 'https://www.instagram.com/babbycake.sofia/',
        iconPath: 'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
      }
];
currentCard: Card = this.cards[Math.floor(Math.random() * this.cards.length)];
cardVisible = true;

constructor() { }

ngOnInit(): void {
  setInterval(() => {
    this.cardVisible = false;
  }, 3000);
}

toggleCardVisibility(): void {
  if (!this.cardVisible) {
    this.currentCard = this.cards[Math.floor(Math.random() * this.cards.length)];
    this.cardVisible = true;
  }
}

navigateToLink(link: string): void {
  window.location.href = link;
}

}
