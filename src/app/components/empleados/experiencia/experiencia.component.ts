import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [
  ]
})
export class ExperienciaComponent implements OnInit {

  empleadoId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.empleadoId = 0;
  }

  ngOnInit(): void {
     this.activatedRoute.parent?.params.subscribe((params) => {
       this.empleadoId = params['empleadoId'];
     });
  }

}
