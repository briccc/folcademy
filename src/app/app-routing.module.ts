import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'pelis', component: PelisComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirigir a 'inicio' por defecto
  { path: '**', redirectTo: '/inicio' }, // Redirigir a 'inicio' si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
