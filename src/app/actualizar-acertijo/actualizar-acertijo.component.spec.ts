import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAcertijoComponent } from './actualizar-acertijo.component';

describe('ActualizarAcertijoComponent', () => {
  let component: ActualizarAcertijoComponent;
  let fixture: ComponentFixture<ActualizarAcertijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarAcertijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarAcertijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
