import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyetosComponent } from './proyetos.component';

describe('ProyetosComponent', () => {
  let component: ProyetosComponent;
  let fixture: ComponentFixture<ProyetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
