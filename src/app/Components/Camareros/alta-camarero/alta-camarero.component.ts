import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent implements OnInit {
  
  newCamarero:Camarero = new Camarero();
  
  constructor(private camareroService:CamareroService) { }

  ngOnInit() {
  }

  create(){
    this.camareroService.create(this.newCamarero).subscribe(respuesta => {
      console.log(respuesta);
    });
  }
}
