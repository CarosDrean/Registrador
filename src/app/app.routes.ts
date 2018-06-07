import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  DatosComponent,
  RegistrarComponent,
  GraficosComponent
} from './components/index.paginas';

const routes: Routes = [
  { path: '', component: RegistrarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const rutas = RouterModule.forRoot(routes, {useHash: true});
