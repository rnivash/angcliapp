import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDescPageComponent } from './price-desc-page.component';

describe('PriceDescPageComponent', () => {
  let component: PriceDescPageComponent;
  let fixture: ComponentFixture<PriceDescPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PriceDescPageComponent]
    });
    fixture = TestBed.createComponent(PriceDescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
