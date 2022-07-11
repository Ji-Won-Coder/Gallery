
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
//import { APP_ROUTING } from './app.routes';

//servicios
import { ObrasService } from "./components/servicios/obras.service";

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ObrasComponent } from './components/obras/obras.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObraComponent } from './components/obra/obra.component';
import { BuscarComponent } from './components/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ObrasComponent,
    FooterComponent,
    ObraComponent,
    BuscarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //APP_ROUTING 
  ],
  providers: [   //AQUI VAN LOS SERVICIOS
    ObrasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
