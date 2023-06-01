import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplReactiveComponent } from './email-templ-reactive.component';

describe('EmailTemplReactiveComponent', () => {
  let component: EmailTemplReactiveComponent;
  let fixture: ComponentFixture<EmailTemplReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTemplReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailTemplReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
