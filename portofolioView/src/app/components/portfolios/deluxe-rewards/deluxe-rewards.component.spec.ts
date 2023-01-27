import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeRewardsComponent } from './deluxe-rewards.component';

describe('DeluxeRewardsComponent', () => {
  let component: DeluxeRewardsComponent;
  let fixture: ComponentFixture<DeluxeRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeluxeRewardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeluxeRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
