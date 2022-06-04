import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdplayerComponent } from './dvdplayer.component';

describe('DvdplayerComponent', () => {
  let component: DvdplayerComponent;
  let fixture: ComponentFixture<DvdplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvdplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
