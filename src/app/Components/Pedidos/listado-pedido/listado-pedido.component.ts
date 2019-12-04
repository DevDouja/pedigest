import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-pedido',
  templateUrl: './listado-pedido.component.html',
  styleUrls: ['./listado-pedido.component.css']
})
export class ListadoPedidoComponent implements OnInit {

  pedidos:Pedido[] = undefined;

  constructor( private pedidoService:PedidoService,
              private router:Router) { }

  ngOnInit() {
    this.pedidos = [];
    this.pedidoService.getAll().subscribe(datos =>{
      this.pedidos = datos;
    });
  }

  goToDetalle(id:number){
    this.router.navigateByUrl('/detalle/' + id);
  }

}
