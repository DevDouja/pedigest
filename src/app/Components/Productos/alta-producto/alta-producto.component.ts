import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  newProducto:Producto = new Producto();
  categorias:SelectItem[] = [];


  constructor(private productoService:ProductoService,
              private router:Router) { }

  ngOnInit() {
    this.productoService.getCategorias().subscribe(datos => {

      for(let categoria of datos){
        this.categorias.push({label:categoria, value: categoria})
      }
    });

  }

  create(){
    this.productoService.create(this.newProducto).subscribe(respuesta => { 
      console.log(respuesta);
    });
    this.router.navigateByUrl('/productos');
  }
}
