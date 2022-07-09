import { Injectable } from '@angular/core'; 

export interface Obras{
    nombre:string;
      bio:string ;
      img:string;
      aparicion:string;
      casa:string;
}

@Injectable()//decorador
export class ObrasService{



    private obras:any[]=[
    {
      nombre: "la noche estrellada",
      bio: "La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh. Pintado en junio de 1889, representa la vista desde la ventana orientada al este de su habitación de asilo en Saint-Rémy-de-Provence, justo antes del amanecer, con la adición de un pueblo imaginario.​​​",
      img: "assets/img/la noche estrellada.png",
      aparicion: "junio de 1889–junio de 1889",
      autor:"Vincent van Gogh"
    },
    {
      nombre: "La Gioconda",
      bio: "El retrato de Lisa Gherardini, esposa de Francesco del Giocondo, ​ más conocido como La Gioconda o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés.",
      img: "assets/img/monalisa.png",
      aparicion: "1503",
      autor:"Leonardo da Vinci"
    },
    {
      nombre: "Guernica",
      bio: "Guernica es un cuadro de Pablo Picasso, pintado en París ​ entre los meses de mayo y junio de 1937, cuyo título alude al bombardeo de Guernica, ocurrido el 26 de abril de dicho año, durante la guerra civil española.",
      img: "assets/img/Guernica.png",
      aparicion: "26 de abril de 1937–junio de 1937",
      autor: "Pablo Picasso"
    },
    {
      nombre: "La joven de la perla",
      bio: "La joven de la perla, también conocida como Muchacha con turbante, es una de las obras maestras del pintor neerlandés Johannes Vermeer realizada entre 1665 y 1667. Como el nombre indica, utiliza un pendiente de perla como punto focal. La pintura se encuentra actualmente en el museo Mauritshuis de La Haya.",
      img: "assets/img/La joven de la perla.png",
      aparicion: "1665",
      autor:"Johannes Vermeer"
    },
    {
      nombre: "La última cena",
      bio: "La última cena es una pintura mural original de Leonardo da Vinci ejecutada entre 1495 y 1498.​​ Se encuentra en la pared sobre la que se pintó originalmente, en el refectorio del convento dominico de Santa Maria delle Grazie, en Milán, ​ declarado Patrimonio de la Humanidad por la Unesco en 1980.​",
      img: "assets/img/laultimacena.png",
      aparicion: "1495–1498",
      autor: " Leonardo da Vinci"
    },
    {
      nombre: "El beso",
      bio: "El beso es una obra del pintor austríaco Gustav Klimt y probablemente su obra más conocida. Es un óleo con laminillas de oro y estaño sobre lienzo de 180 x 180 centímetros, realizado entre 1907-08.​Esta obra, que sigue los cánones del Simbolismo, es una tela con decoraciones y mosaicos sobre un fondo dorado.",
      img: "assets/img/El beso.png",
      aparicion: "1907-8",
      autor: " Gustav Klimt"
    },
    {
      nombre: "El grito",
      bio: "El grito es el título de cuatro cuadros del noruego Edvard Munch. La versión más famosa se encuentra en la Galería Nacional de Noruega y fue completada en 1893.​ Otras dos versiones del cuadro se encuentran en el Museo Munch, también en Oslo, mientras que la cuarta versión pertenece a una colección particular.",
      img: "assets/img/El grito.png",
      aparicion: "1893",
      autor: "Edvard Munch"
    },
    {
        nombre: "La creación de Adán",
        bio: "La creación de Adán es un fresco en la bóveda de la Capilla Sixtina, pintado por Miguel Ángel alrededor del año 1511. Ilustra uno de los nueve episodios del Génesis representados allí por el artista toscano, ​ en el cual Dios le da vida a Adán, el primer hombre.",
        img: "assets/img/la creacion de adan.png",
        aparicion: "1511",
        autor: "Miguel Ángel"
      }
  ];

    constructor(){ 
        console.log('servicio listo para usarse!!!!');
    }
    
    getObras():Obras[]{ 
        return this.obras; //se hace refernaca la clase privada 
    }
    

}
