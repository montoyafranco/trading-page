import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pay',
    component: PayComponent,
  },
  {
    path: 'evaluaciones',
    component: EvaluacionesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'transaccion',
    component: TransaccionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
