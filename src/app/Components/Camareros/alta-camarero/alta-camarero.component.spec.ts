import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCamareroComponent } from './alta-camarero.component';

describe('AltaCamareroComponent', () => {
  let component: AltaCamareroComponent;
  let fixture: ComponentFixture<AltaCamareroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaCamareroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCamareroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
