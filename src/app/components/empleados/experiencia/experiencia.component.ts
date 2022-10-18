import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [],
})
export class ExperienciaComponent implements OnInit {

  empleadoId?: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      this.empleadoId = params['empleadoId'];
    });
  }
}
