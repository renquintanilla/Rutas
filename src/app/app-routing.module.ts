import { RandomGuard } from './random.guard';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ProyetosComponent } from './components/empleados/proyetos/proyetos.component';
import { DetalledeEmpleadoComponent } from './components/detallede-empleado/detallede-empleado.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '', pathMatch: 'full', component: InfoComponent},
  {path: 'acerca', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'info', component: InfoComponent, canActivate:[RandomGuard]},
  {path: 'grilla', component: GrillaComponent},
  {path: 'empleados/:empleadoId', component:DetalledeEmpleadoComponent, children: [
    {path: 'proyectos', component: ProyetosComponent},
    {path: 'curriculum', component: CurriculumComponent},
    {path: 'experiencia', component: ExperienciaComponent}
  ]},
  {path: '**', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
