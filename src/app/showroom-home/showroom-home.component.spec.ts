import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomHomeComponent } from './showroom-home.component';

describe('ShowroomHomeComponent', () => {
  let component: ShowroomHomeComponent;
  let fixture: ComponentFixture<ShowroomHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShowroomHomeComponent]
    });
    fixture = TestBed.createComponent(ShowroomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
