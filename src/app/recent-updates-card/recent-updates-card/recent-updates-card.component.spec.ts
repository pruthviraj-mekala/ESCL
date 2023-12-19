import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUpdatesCardComponent } from './recent-updates-card.component';

describe('RecentUpdatesCardComponent', () => {
  let component: RecentUpdatesCardComponent;
  let fixture: ComponentFixture<RecentUpdatesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentUpdatesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentUpdatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
