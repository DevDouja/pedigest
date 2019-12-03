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

  categorias:string[] = undefined;
  editedProducto:Producto = new Producto();

  constructor(private productoService:ProductoService,
              private route: ActivatedRoute, 
              private router:Router) { }

  ngOnInit() {

    this.productoService.getCategorias().subscribe(datos => {
      this.categorias = datos;
    });

    var codigo;
    this.route.params.subscribe(x => {
      console.log(x);
      this.productoService.getProducto(Number(x.codigo)).subscribe(datos => {
       // console.log("antes del Edit" + this.editedProducto);
        this.editedProducto = datos;
        
      });
    });
   
    
  }

  update(){
    //console.log("despues del Edit" + this.editedProducto);
    this.productoService.upDate(this.editedProducto).subscribe(respuesta=>{
      
      this.router.navigateByUrl('/productos');
    })
  }

}
