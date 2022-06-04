import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RANDEVUComponent } from './randevu.component';

describe('RANDEVUComponent', () => {
  let component: RANDEVUComponent;
  let fixture: ComponentFixture<RANDEVUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RANDEVUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RANDEVUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
