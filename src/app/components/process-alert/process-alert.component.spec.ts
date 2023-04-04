import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAlertComponent } from './process-alert.component';

describe('ProcessAlertComponent', () => {
  let component: ProcessAlertComponent;
  let fixture: ComponentFixture<ProcessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
