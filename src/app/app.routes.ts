import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import{ AboutComponent } from './components/about/about.component';
import{ ObrasComponent } from './components/obras/obras.component';


const APP_ROUTES:Routes=[ //ARREGLO DE RUTAS
    {path:'home',component:HomeComponent}, //CADA RUTA TIENE UN PATH Y UN COMPONENT
    {path:'about',component:AboutComponent},
    {path:'obras',component:ObrasComponent},
    {path:'**', pathMatch:'full',redirectTo:'home'} //SI NO SE ENCUENTRA LA RUTA DE ARRIBA SE VA A EJECUTAR, ESTA LINEA
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
