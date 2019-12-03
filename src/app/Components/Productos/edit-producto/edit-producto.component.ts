import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  editedProducto:Producto = new Producto();
  constructor(private productoService:ProductoService,
              private route: ActivatedRoute, 
              private router:Router) { }

  ngOnInit() {
    var codigo;
    this.route.params.subscribe(x => {
      console.log(x);
      this.productoService.getProducto(Number(x.codigo)).subscribe(datos => this.editedProducto = datos);
    });
   
    console.log(this.editedProducto);
  }

}
