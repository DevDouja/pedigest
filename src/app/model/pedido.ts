import { Camarero } from './camarero';
import { Producto } from './producto';
import { LineasPedido } from './lineasPedido';

export class Pedido{
    id:number;
    fecha:Date;
    mesa:number;
    camarero:Camarero;
    lineasPedido:LineasPedido[];

    constructor( id?:number, fecha?:Date, mesa?:number, camarero?:Camarero, lineasPedido?:LineasPedido[]){

        this.id = id;
        this.fecha = fecha;
        this.mesa = mesa;
        this.camarero = camarero;
        this.lineasPedido = lineasPedido;

    }
}