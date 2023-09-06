import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleBasketComponent } from './apple-basket.component';

describe('AppleBasketComponent', () => {
  let component: AppleBasketComponent;
  let fixture: ComponentFixture<AppleBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppleBasketComponent]
    });
    fixture = TestBed.createComponent(AppleBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
