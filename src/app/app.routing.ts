import { Routes, RouterModule } from '@angular/router';
import { ListaAcertijosComponent } from './lista-acertijos/lista-acertijos.component';
import { FormularioAcertijosComponent } from './formulario-acertijos/formulario-acertijos.component';
import { DetalleAcertijoComponent } from './detalle-acertijo/detalle-acertijo.component';
import { MasInfoComponent } from './mas-info/mas-info.component';
import { ActualizarAcertijoComponent } from './actualizar-acertijo/actualizar-acertijo.component';

const appRoutes = [
    {path:'acertijoActualizar/:key', component: ActualizarAcertijoComponent },
    {path:'acertijoDetalle/:key', component: DetalleAcertijoComponent },
    {path:'formulario', component: FormularioAcertijosComponent },
    {path:'catalogo', component: ListaAcertijosComponent },
    {path:'masInfo', component: MasInfoComponent },
    {path:'', redirectTo: 'catalogo', pathMatch: 'full'}
];
export const routing = RouterModule.forRoot(appRoutes);