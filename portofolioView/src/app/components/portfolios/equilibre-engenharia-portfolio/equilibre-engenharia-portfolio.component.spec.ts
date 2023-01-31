import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquilibreEngenhariaPortfolioComponent } from './equilibre-engenharia-portfolio.component';

describe('EquilibreEngenhariaPortfolioComponent', () => {
  let component: EquilibreEngenhariaPortfolioComponent;
  let fixture: ComponentFixture<EquilibreEngenhariaPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquilibreEngenhariaPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquilibreEngenhariaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
