import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-bulletin',
  templateUrl: './news-bulletin.component.html',
  styleUrls: ['./news-bulletin.component.css']
})
export class NewsBulletinComponent {
  @Input() news: string[] = [];
  highligts : string[] = [
    'Captains-Meeting on April-01-2024',
    'Tape ball T-8 Roster  comming soon',
    'Tennis ball T-10 Roster  comming soon',
    'More to come...',
  ];
}