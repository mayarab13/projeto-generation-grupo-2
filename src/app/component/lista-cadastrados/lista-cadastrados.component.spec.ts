import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadastradosComponent } from './lista-cadastrados.component';

describe('ListaCadastradosComponent', () => {
  let component: ListaCadastradosComponent;
  let fixture: ComponentFixture<ListaCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
