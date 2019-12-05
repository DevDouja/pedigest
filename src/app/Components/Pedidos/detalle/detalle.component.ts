import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { LineasPedido } from 'src/app/model/lineasPedido';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Camarero } from 'src/app/model/camarero';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  lineasPedidos:LineasPedido[] = undefined;
  pedido:Pedido = new Pedido();
  id:number =0;


  constructor( private router:Router,
               private route: ActivatedRoute, 
               private pedidoService:PedidoService) { }

  ngOnInit() {
    this.pedido.camarero = new Camarero();
 
    this.route.params.subscribe(x => {
      this.id = Number(x.id);
      console.log(x);
      this.pedidoService.getPedido(Number(x.id)).subscribe(datos => {
        this.pedido = datos;
        this.lineasPedidos =datos.lineasPedido;
        console.log(datos.lineasPedido);
       /* for(let linea of datos.lineasPedidos.values()){
          console.log(linea);
        }*/
        
      });
    });

  console.log("pedido: **********");
   console.log( this.pedido);
  }



}
