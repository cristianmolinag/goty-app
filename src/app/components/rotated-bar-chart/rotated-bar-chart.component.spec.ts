import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatedBarChartComponent } from './rotated-bar-chart.component';

describe('RotatedBarChartComponent', () => {
  let component: RotatedBarChartComponent;
  let fixture: ComponentFixture<RotatedBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatedBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
