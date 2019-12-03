import { Producto } from './producto';

export class LineasPedido{
    
    producto:Producto;
    cantidad:number;
    precio:number;

    constructor(producto?:Producto, cantidad?:number, precio?:number){

        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;


    }



}