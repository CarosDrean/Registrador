import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rutas } from './app.routes';

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { DatosComponent } from './components/datos/datos.component';
import { GraficosComponent } from './components/graficos/graficos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrarComponent,
    DatosComponent,
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    rutas,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
