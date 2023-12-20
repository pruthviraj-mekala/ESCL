import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsersCarouselComponent } from './sponsers-carousel.component';

describe('SponsersCarouselComponent', () => {
  let component: SponsersCarouselComponent;
  let fixture: ComponentFixture<SponsersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsersCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
