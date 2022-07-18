import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObrasService } from '../servicios/obras.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
 
})

export class BuscarComponent implements OnInit {

  obras:any[] =[]//variable local
  termino!: string;
  

  constructor(private activatedRoute:ActivatedRoute,
              private _obrasService:ObrasService) { 
        
 }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.obras = this._obrasService.buscarObras(params['termino']);
      console.log(this.obras);
    });
  }

  

}
