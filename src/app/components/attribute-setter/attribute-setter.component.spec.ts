import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeSetterComponent } from './attribute-setter.component';

describe('AttributeSetterComponent', () => {
  let component: AttributeSetterComponent;
  let fixture: ComponentFixture<AttributeSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeSetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
