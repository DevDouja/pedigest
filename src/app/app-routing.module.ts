import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoProductoComponent } from './Components/Productos/listado-producto/listado-producto.component';
import { AltaProductoComponent } from './Components/Productos/alta-producto/alta-producto.component';
import { ListadoCamareroComponent } from './Components/Camareros/listado-camarero/listado-camarero.component';
import { AltaCamareroComponent } from './Components/Camareros/alta-camarero/alta-camarero.component';
import { ListadoPedidoComponent } from './Components/Pedidos/listado-pedido/listado-pedido.component';
import { AltaPedidoComponent } from './Components/Pedidos/alta-pedido/alta-pedido.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { DetalleComponent } from './components/pedidos/detalle/detalle.component';



const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'productos', component: ListadoProductoComponent},
  { path: 'productos/alta', component: AltaProductoComponent},
  { path: 'camareros', component: ListadoCamareroComponent},
  { path: 'camareros/alta', component: AltaCamareroComponent},
  { path: 'pedidos', component: ListadoPedidoComponent},
  { path: 'pedidos/alta', component: AltaPedidoComponent},
  {path: 'productos/edit/:codigo', component: EditProductoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  { path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
