//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//components
import { AppComponent } from './app.component';
import { AltaCamareroComponent } from './Components/Camareros/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './Components/Camareros/listado-camarero/listado-camarero.component';
import { AltaProductoComponent } from './Components/Productos/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './Components/Productos/listado-producto/listado-producto.component';
import { AltaPedidoComponent } from './Components/Pedidos/alta-pedido/alta-pedido.component';
import { ListadoPedidoComponent } from './Components/Pedidos/listado-pedido/listado-pedido.component';
import { HomeComponent } from './components/home/home.component';

//services
import { CamareroService } from './services/camarero.service';
import { PedidoService } from './services/pedido.service';
import { ProductoService } from './services/producto.service';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { DetalleComponent } from './components/pedidos/detalle/detalle.component';
import { PrimengModule } from './primeng/primeng.module';
import { BooleanPipe } from './pipes/boolean.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    ListadoCamareroComponent,
    AltaProductoComponent,
    ListadoProductoComponent,
    AltaPedidoComponent,
    ListadoPedidoComponent,
    HomeComponent,
    EditProductoComponent,
    DetalleComponent,
    BooleanPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [CamareroService, PedidoService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
