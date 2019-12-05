import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { Pedido } from 'src/app/model/pedido';
import { LineasPedido } from 'src/app/model/lineasPedido';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  camareros:Camarero[] = undefined;
  newPedido:Pedido = new Pedido();
  producto:Producto = new Producto();
  cantidad:number = 0;
  productos:Producto[] = undefined;
  lineasPedido:LineasPedido[] = [];
  lineaPedido:LineasPedido = new LineasPedido();

  constructor(private camareroService:CamareroService,
              private productoService:ProductoService,
              private pedidoService:PedidoService,
              private router:Router ) { }

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
   /* console.log("***********");
    console.log(this.newPedido.camarero);
    console.log(this.newPedido.id);
    console.log(this.newPedido.mesa);*/

    this.lineaPedido = new LineasPedido();
    this.lineaPedido.cantidad = this.cantidad;
    this.lineaPedido.producto = this.producto;
    this.lineaPedido.precio = this.lineaPedido.producto.precio;
    /*console.log(this.lineaPedido.producto);
    console.log(this.lineaPedido.cantidad);
    console.log( this.lineaPedido);*/

    this.lineasPedido.push(this.lineaPedido);
    console.log(this.lineasPedido);
  }

  addPedido(){
    this.newPedido.fecha = new Date();
    this.newPedido.lineasPedido = this.lineasPedido;
    console.log("******************");
    console.log(this.newPedido);

    this.pedidoService.create(this.newPedido).subscribe(datos =>{
        console.log(datos);
    });

    this.router.navigateByUrl('/pedidos');
  }

}
