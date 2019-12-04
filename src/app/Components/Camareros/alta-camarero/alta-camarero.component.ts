import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent implements OnInit {
  
  newCamarero:Camarero = new Camarero();
  
  constructor(private camareroService:CamareroService,
              private router:Router) { }

  ngOnInit() {
  }

  create(){
    this.camareroService.create(this.newCamarero).subscribe(respuesta => {
      console.log(respuesta);
    });
    this.router.navigateByUrl('/camareros');
  }
}
