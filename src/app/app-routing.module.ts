import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: InfoComponent},
  {path: 'acerca', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'info', component: InfoComponent},
  {path: 'grilla', component: GrillaComponent},
  {path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'curriculum',  component: CurriculumComponent},
    {path: 'experiencia', component: ExperienciaComponent}
    ]
  },
  {path: '**', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * localhost:4200/empleados/458/proyectos
 * localhost:4200/empleados/458/curriculum
 * localhost:4200/empleados/458/experiencia
 */
