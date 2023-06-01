import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageConverterComponent } from './landing-page-converter.component';

describe('LandingPageConverterComponent', () => {
  let component: LandingPageConverterComponent;
  let fixture: ComponentFixture<LandingPageConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
