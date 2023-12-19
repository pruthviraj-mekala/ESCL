import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.less'
})
export class ImageCarouselComponent {

  slides?: any[];

  constructor() { }

  ngOnInit(): void {
    this.slides = [{
      id: 0,
      src: 'assets/gallery/pic1.jpg',
      title: '',
      subtitle: ''
    }, {
      id: 0,
      src: 'assets/gallery/pic2.jpg',
      title: '',
      subtitle: ''
    }, {
      id: 0,
      src: 'assets/gallery/pic3.jpg',
      title: '',
      subtitle: ''
    }];

  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
