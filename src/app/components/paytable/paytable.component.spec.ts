import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytableComponent } from './paytable.component';

describe('PaytableComponent', () => {
  let component: PaytableComponent;
  let fixture: ComponentFixture<PaytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaytableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
