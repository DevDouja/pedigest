import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos:Producto[] = undefined;
  constructor(private productoService:ProductoService,
              private router: Router) { }

  ngOnInit() {
    this.productoService.getAll().subscribe(datos=>{
      this.productos = datos;
    });
  }

  update(codigo:number){
    console.log(codigo);
    this.router.navigateByUrl('/productos/edit/' + codigo);
  }

}
