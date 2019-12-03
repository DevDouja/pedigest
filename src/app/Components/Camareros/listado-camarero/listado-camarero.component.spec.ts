import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCamareroComponent } from './listado-camarero.component';

describe('ListadoCamareroComponent', () => {
  let component: ListadoCamareroComponent;
  let fixture: ComponentFixture<ListadoCamareroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCamareroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCamareroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
