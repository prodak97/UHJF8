import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRecordComponent } from './button-record.component';

describe('ButtonRecordComponent', () => {
  let component: ButtonRecordComponent;
  let fixture: ComponentFixture<ButtonRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
