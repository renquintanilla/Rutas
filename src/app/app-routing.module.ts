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
  {path: '**', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
