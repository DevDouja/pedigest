import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL="http://10.250.5.44:8086/api/pedidos";

  constructor( private http:HttpClient) { }

  getAll():Observable<Pedido[]>{

    return this.http.get<Pedido[]>(this.URL);
  }

  getPedido(id:number):Observable<Pedido>{
    console.log(id);
    return this.http.get<Pedido>( this.URL + "/"+id);
  }

  create(pedido:Pedido):Observable<Pedido>{

    return this.http.post<Pedido>(this.URL,pedido);
  }
}
