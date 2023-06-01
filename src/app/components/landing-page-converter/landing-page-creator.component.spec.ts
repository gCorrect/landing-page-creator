import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCreatorComponent } from './landing-page-creator.component';

describe('LandingPageCreatorComponent', () => {
  let component: LandingPageCreatorComponent;
  let fixture: ComponentFixture<LandingPageCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageCreatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
