import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { Pedido } from 'src/app/model/pedido';
import { LineasPedido } from 'src/app/model/lineasPedido';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  camareros:Camarero[] = undefined;
  newPedido:Pedido = new Pedido();
  cantidad:number = 0;
  producto:Producto = new Producto();
  lineasPedido:LineasPedido[] = undefined;
  productos:Producto[] = undefined;
  lineaPedido:LineasPedido = new LineasPedido();

  constructor(private camareroService:CamareroService,
              private productoService:ProductoService) { }

  ngOnInit() {
    
      this.camareroService.getAll().subscribe(datos =>{
      console.log("altapedido" + datos);
      this.camareros = datos;
    });

    this.productoService.getAll().subscribe(datos =>{
      console.log("altapedido" + datos);
      this.productos = datos;
    });
  }

  addLineaProducto(){
    console.log(this.producto);
    console.log(this.lineaPedido.cantidad);
  }

}
