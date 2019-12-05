import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL = "http://10.250.5.44:8086/api/productos";

  constructor(private http:HttpClient) { }

  getAll():Observable<Producto[]>{

    return this.http.get<Producto[]>(this.URL);
  }

  getCategorias():Observable<string[]>{

    return this.http.get<string[]>('http://10.250.5.44:8086/api/categorias');
  }

  create(producto:Producto):Observable<Producto>{
    console.log("Damos de alta producto: " + producto.codigo);
    return this.http.post<Producto>(this.URL, producto);
  }

  upDate(editedProducto:Producto):Observable<Producto>{
    console.log("update" + editedProducto.codigo);
    return this.http.put<Producto>(this.URL,editedProducto);

  }

  getProducto(codigo:number):Observable<Producto>{
    console.log(codigo);
    return this.http.get<Producto>( this.URL + "/"+codigo);
  }
}
