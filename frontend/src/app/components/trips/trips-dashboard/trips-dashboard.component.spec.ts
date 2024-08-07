import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsDashboardComponent } from './trips-dashboard.component';

describe('TripsDashboardComponent', () => {
  let component: TripsDashboardComponent;
  let fixture: ComponentFixture<TripsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsDashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
