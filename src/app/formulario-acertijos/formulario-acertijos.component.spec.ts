import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAcertijosComponent } from './formulario-acertijos.component';

describe('FormularioAcertijosComponent', () => {
  let component: FormularioAcertijosComponent;
  let fixture: ComponentFixture<FormularioAcertijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAcertijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAcertijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
