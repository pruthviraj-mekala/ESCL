import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaCricketComponent } from './usa-cricket.component';

describe('UsaCricketComponent', () => {
  let component: UsaCricketComponent;
  let fixture: ComponentFixture<UsaCricketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsaCricketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsaCricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
