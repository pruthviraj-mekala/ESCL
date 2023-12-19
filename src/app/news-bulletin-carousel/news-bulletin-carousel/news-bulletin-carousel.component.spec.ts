import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBulletinCarouselComponent } from './news-bulletin-carousel.component';

describe('NewsBulletinCarouselComponent', () => {
  let component: NewsBulletinCarouselComponent;
  let fixture: ComponentFixture<NewsBulletinCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBulletinCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsBulletinCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
