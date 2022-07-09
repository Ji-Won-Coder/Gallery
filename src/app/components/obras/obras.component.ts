import { Component, OnInit } from '@angular/core';
import { ObrasService,Obras } from '../servicios/obras.service';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  
})
export class ObrasComponent implements OnInit {

  arte:Obras[] = [];

  constructor(private _obrasService:ObrasService) { 
    console.log("constructor");
  }

  ngOnInit() {

    this.arte = this._obrasService.getObras();

    console.log (this.arte);

  }

}
