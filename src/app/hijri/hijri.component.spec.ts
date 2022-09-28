import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijriComponent } from './hijri.component';

describe('HijriComponent', () => {
  let component: HijriComponent;
  let fixture: ComponentFixture<HijriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
