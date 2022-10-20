import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalledeEmpleadoComponent } from './detallede-empleado.component';

describe('DetalledeEmpleadoComponent', () => {
  let component: DetalledeEmpleadoComponent;
  let fixture: ComponentFixture<DetalledeEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalledeEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalledeEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
