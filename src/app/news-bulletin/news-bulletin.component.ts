import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-bulletin',
  templateUrl: './news-bulletin.component.html',
  styleUrls: ['./news-bulletin.component.less']
})
export class NewsBulletinComponent {
  @Input() news: string[] = [];
  highligts: string[] = [
    'Captains-Meeting on April-01-2024',
    'Tape ball T-8 Roster  comming soon',
    'Tennis ball T-10 Roster  comming soon',
    'Aubrey Day is the Editorial Director at Future  politics for all of Britain',
    'More to come...',
  ];
}