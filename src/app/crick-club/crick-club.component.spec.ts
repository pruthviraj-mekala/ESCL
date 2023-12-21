import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickClubComponent } from './crick-club.component';

describe('CrickClubComponent', () => {
  let component: CrickClubComponent;
  let fixture: ComponentFixture<CrickClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrickClubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrickClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
