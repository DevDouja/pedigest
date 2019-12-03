import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  newProducto:Producto = new Producto();
  categorias:string[] = undefined;

  constructor(private productoService:ProductoService,
              private router:Router) { }

  ngOnInit() {
    this.productoService.getCategorias().subscribe(datos => {
      this.categorias = datos;
    });
  }

  create(){
    this.productoService.create(this.newProducto).subscribe(respuesta => { 
      console.log(respuesta);
    });
    this.router.navigateByUrl('/productos');
  }
}
