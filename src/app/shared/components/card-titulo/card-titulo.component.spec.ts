/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardTituloComponent } from './card-titulo.component';

describe('CardTituloComponent', () => {
  let component: CardTituloComponent;
  let fixture: ComponentFixture<CardTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
