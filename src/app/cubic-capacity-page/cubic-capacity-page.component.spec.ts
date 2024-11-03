import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubicCapacityPageComponent } from './cubic-capacity-page.component';

describe('CubicCapacityPageComponent', () => {
  let component: CubicCapacityPageComponent;
  let fixture: ComponentFixture<CubicCapacityPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CubicCapacityPageComponent]
    });
    fixture = TestBed.createComponent(CubicCapacityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
