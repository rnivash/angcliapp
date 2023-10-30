import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtcComponent } from './atc.component';

describe('AtcComponent', () => {
  let component: AtcComponent;
  let fixture: ComponentFixture<AtcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtcComponent]
    });
    fixture = TestBed.createComponent(AtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
