import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsignatureComponent } from './register-asignature.component';

describe('RegisterAsignatureComponent', () => {
  let component: RegisterAsignatureComponent;
  let fixture: ComponentFixture<RegisterAsignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAsignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
