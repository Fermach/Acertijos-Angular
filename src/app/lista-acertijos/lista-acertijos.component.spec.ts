import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcertijosComponent } from './lista-acertijos.component';

describe('ListaAcertijosComponent', () => {
  let component: ListaAcertijosComponent;
  let fixture: ComponentFixture<ListaAcertijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAcertijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAcertijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
