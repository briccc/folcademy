import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Asegúrate de importar 'Routes' aquí
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module'
import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PelisComponent,
    SeriesComponent,
    IngresarComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, LayoutModule], // Importa 'RouterModule' aquí
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
