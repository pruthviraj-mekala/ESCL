import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsers-carousel',
  templateUrl: './sponsers-carousel.component.html',
  styleUrl: './sponsers-carousel.component.less'
})
export class SponsersCarouselComponent {

  slides?: any[];

  constructor() { }

  ngOnInit(): void {
    this.slides = [{
      id: 0,
      src: 'assets/sponsers/howard_hanna.jpeg',
      title: '',
      subtitle: ''
    }, {
      id: 0,
      src: 'assets/sponsers/indian_flame.jpeg',
      title: '',
      subtitle: ''
    }, {
      id: 0,
      src: 'assets/sponsers/sligo_software.jpeg',
      title: '',
      subtitle: ''
    }, {
      id: 0,
      src: 'assets/sponsers/cart_and_cafe.jpeg',
      title: '',
      subtitle: ''
    }];

  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
