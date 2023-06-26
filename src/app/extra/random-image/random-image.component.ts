import { Component, OnInit } from '@angular/core';

interface Card {
  imagePath: string;
  authorName: string;
  link?: string;
  iconPath?: string;
}

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css'],
})
export class RandomImageComponent implements OnInit {
  cards: Card[] = [
    {
      imagePath:
        '../../../assets/publicita/Akuma_MeaMox.jpg',
      authorName: 'MeaMox',
      link: 'https://www.instagram.com/hellenmoz/',
      iconPath:
        'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
    },
    {
      imagePath:
        '../../../assets/publicita/a01_MeaMox.jpg',
      authorName: 'MeaMox',
      link: 'https://www.instagram.com/hellenmoz/',
      iconPath:
        'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
    },
    {
      imagePath:
        '../../../assets/publicita/marika_pax_magliaBatWoman.PNG',
      authorName: 'Marika_Pax Shop',
      link: 'https://store.streamelements.com/marika_pax',
      iconPath:
        '../../../assets/publicita/icon/shop_icon.jpg',
    },
    {
      imagePath:
        '../../../assets/publicita/marika_pax_magliaSkull.PNG',
      authorName: 'Marika_Pax Shop',
      link: 'https://store.streamelements.com/marika_pax',
      iconPath:
        '../../../assets/publicita/icon/shop_icon.jpg',
    },
    {
      imagePath:
        'https://cdn.discordapp.com/attachments/880935650487046214/1122805865855070279/WhatsApp_Image_2023-06-10_at_23.11.00.jpeg',
      authorName: 'Mitsuri_iota',
      link: 'https://www.twitch.tv/roxannepierce',
      iconPath:
        'https://cdn.iconscout.com/icon/free/png-512/free-twitch-11-461838.png?f=avif&w=256',
    },
    {
      imagePath: '../../../assets/publicita/soro1.jpg',
      authorName: 'Babbycake',
      link: 'https://www.instagram.com/babbycake.sofia/',
      iconPath:
        'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
    },
    {
      imagePath: '../../../assets/publicita/soro2.jpg',
      authorName: 'Babbycake',
      link: 'https://www.instagram.com/babbycake.sofia/',
      iconPath:
        'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
    },
    {
      imagePath: '../../../assets/publicita/soro3.jpeg',
      authorName: 'Babbycake',
      link: 'https://www.instagram.com/babbycake.sofia/',
      iconPath:
        'https://freelogopng.com/images/all_img/1658587303instagram-png.png',
    },
  ];
  currentCard: Card = this.cards[Math.floor(Math.random() * this.cards.length)];
  cardVisible = true;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.cardVisible = false;
    }, 3000);
  }

  toggleCardVisibility(): void {
    if (!this.cardVisible) {
      this.currentCard =
        this.cards[Math.floor(Math.random() * this.cards.length)];
      this.cardVisible = true;
    }
  }

  navigateToLink(link: string): void {
    window.open(link, '_blank');
  }
}
