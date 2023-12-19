// image-slider.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition(':enter, :leave', animate('300ms')),
    ]),
  ],
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    'assets/gallery/pic1.jpg',
    'assets/gallery/pic1.jpg',
    'assets/gallery/pic1.jpg',
    // Add more image URLs as needed
  ];

  currentSlide = 0;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }
}
