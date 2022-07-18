import { Component, OnInit } from '@angular/core';
import { ObrasService,Obras } from '../servicios/obras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  
})
export class ObrasComponent implements OnInit {

  arte:Obras[] = [];

  constructor(private _obrasService:ObrasService,private router:Router) { 
   
    //console.log("constructor");
  }

  ngOnInit() {

    this.arte = this._obrasService.getObras();

    //console.log (this.arte);

    
  }

  verObra( idx : number){
    //console.log(idx)
    this.router.navigate(['obra/',idx]);
    //console.log(inx);
  }


}


