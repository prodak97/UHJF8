import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbPortComponent } from './usb-port.component';

describe('UsbPortComponent', () => {
  let component: UsbPortComponent;
  let fixture: ComponentFixture<UsbPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsbPortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsbPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
