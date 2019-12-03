import { Component, OnInit } from '@angular/core';
import { CamareroService } from 'src/app/services/camarero.service';
import { Camarero } from 'src/app/model/camarero';

@Component({
  selector: 'app-listado-camarero',
  templateUrl: './listado-camarero.component.html',
  styleUrls: ['./listado-camarero.component.css']
})
export class ListadoCamareroComponent implements OnInit {

  camareros:Camarero[]= undefined;
  constructor(private camareroService:CamareroService) { }

  ngOnInit() {
    console.log("hello");
      this.camareroService.getAll().subscribe(datos =>{
      //console.log(datos);
      this.camareros = datos;
    });
  }

}
