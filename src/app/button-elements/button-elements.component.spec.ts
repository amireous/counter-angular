import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonElementsComponent } from './button-elements.component';

describe('ButtonElementsComponent', () => {
  let component: ButtonElementsComponent;
  let fixture: ComponentFixture<ButtonElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
