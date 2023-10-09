
import { Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';

export const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'peliculas', component: PelisComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: '**', redirectTo: '' },


];

