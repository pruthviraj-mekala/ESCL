import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBulletinComponent } from './news-bulletin.component';

describe('NewsBulletinComponent', () => {
  let component: NewsBulletinComponent;
  let fixture: ComponentFixture<NewsBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsBulletinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
