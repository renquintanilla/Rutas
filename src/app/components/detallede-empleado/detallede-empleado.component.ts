import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallede-empleado',
  templateUrl: './detallede-empleado.component.html',
  styles: [
  ]
})
export class DetalledeEmpleadoComponent implements OnInit {

  empleadoId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.empleadoId = 0;

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {this.empleadoId = params['empleadoId'];
      });

  }

}
