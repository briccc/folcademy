import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module'
import { CardComponent } from './shared/card/card.component';
import { appRoutes } from './app.routing';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { SeriesComponent } from './routes/series/series.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InicioComponent,
    PelisComponent,
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), LayoutModule, FormsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
