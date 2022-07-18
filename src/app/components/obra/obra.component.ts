import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'


import { ObrasService} from '../servicios/obras.service';


@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  
})
export class ObraComponent  {

  obra:any={};

  constructor(private activatedRoute:ActivatedRoute,
              private _obrasservice:ObrasService 
  ) { 
    this.activatedRoute.params.subscribe(params => {
        this.obra= this._obrasservice.getObra(params['id']);    
        //console.log(params['this.obra']); 
       
    });
  }


}