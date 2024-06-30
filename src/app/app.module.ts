import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { LoginComponent } from './Componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudiantesComponent,
    DocentesComponent,
    AdministradorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
