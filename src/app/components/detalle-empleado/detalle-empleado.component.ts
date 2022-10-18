import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styles: [
  ]
})
export class DetalleEmpleadoComponent implements OnInit {

empleadoId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.empleadoId = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.empleadoId = params['empleadoId'];

    });
  }

}
