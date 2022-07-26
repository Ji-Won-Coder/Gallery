<<<<<<< Updated upstream
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-obra-tarjeta',
  templateUrl: './obra-tarjeta.component.html'
})

export class ObraTarjetaComponent implements OnInit {

  @Input() obras:any  = []; //esto quiere decir que la propiedad obras viene de afuera
  @Input() fuera!:number;

  constructor( private router:Router) {
    console.log(this.obras)
   }
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obra-tarjeta',
  templateUrl: './obra-tarjeta.component.html',
})
export class ObraTarjetaComponent implements OnInit {

  constructor() { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
  verObras(){
    //console.log(this.fuera);
    this.router.navigate(['/obra',this.fuera]);
  }

=======
>>>>>>> Stashed changes
}
