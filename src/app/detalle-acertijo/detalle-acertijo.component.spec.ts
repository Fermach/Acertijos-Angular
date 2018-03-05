import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAcertijoComponent } from './detalle-acertijo.component';

describe('DetalleAcertijoComponent', () => {
  let component: DetalleAcertijoComponent;
  let fixture: ComponentFixture<DetalleAcertijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAcertijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAcertijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
