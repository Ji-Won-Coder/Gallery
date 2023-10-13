import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import{ AboutComponent } from './components/about/about.component';
import{ ObrasComponent } from './components/obras/obras.component';
import{ ObraComponent } from './components/obra/obra.component';
import{ BuscarComponent } from './components/buscar/buscar.component';
import { MisnotasComponent } from './components/misnotas/misnotas.component';
//hola
const routes: Routes = [
    {path:'home',component:HomeComponent}, //CADA RUTA TIENE UN PATH Y UN COMPONENT
    {path:'about',component:AboutComponent},
    {path:'obras',component:ObrasComponent},
    {path:'obra/:id',component:ObraComponent},
    {path:'misnotas',component:MisnotasComponent},
    {path:'buscador/:termino',component:BuscarComponent},
    {path:'**', pathMatch:'full',redirectTo:'home'}//SI NO SE ENCUENTRA LA RUTA DE ARRIBA SE VA A EJECUTAR, ESTA LINEA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
