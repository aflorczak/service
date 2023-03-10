import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalWrapperComponent } from './rental-wrapper.component';

describe('RentalWrapperComponent', () => {
  let component: RentalWrapperComponent;
  let fixture: ComponentFixture<RentalWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
