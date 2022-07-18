import { Injectable } from '@angular/core'; 

export interface Obras{
    nombre:string;
      bio:string ;
      img:string;
      aparicion:string;
      casa:string;      
      tipo:string;
      idx?: any;
}

@Injectable()//decorador
export class ObrasService{



    private obras:any[]=[
    {
      nombre: "la noche estrellada",
      bio: "La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh. Pintado en junio de 1889, representa la vista desde la ventana orientada al este de su habitación de asilo en Saint-Rémy-de-Provence, justo antes del amanecer, con la adición de un pueblo imaginario.​​​",
      img: "assets/img/la noche estrellada.png",
      aparicion: "junio de 1889–junio de 1889",
      autor:"Vincent van Gogh",
      tipo:"Realista"
    },
    {
      nombre: "La Gioconda",
      bio: "El retrato de Lisa Gherardini, esposa de Francesco del Giocondo, ​ más conocido como La Gioconda o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés.",
      img: "assets/img/monalisa02.png",
      aparicion: "1503",
      autor:"Leonardo da Vinci",
      tipo:"Realista"
    },
    {
      nombre: "Guernica",
      bio: "Guernica es un cuadro de Pablo Picasso, pintado en París ​ entre los meses de mayo y junio de 1937, cuyo título alude al bombardeo de Guernica, ocurrido el 26 de abril de dicho año, durante la guerra civil española.el cuadro que expresa el rechazo y desolacion de aquella guerra",
      img: "assets/img/Guernica.png",
      aparicion: "26 de abril de 1937–junio de 1937",
      autor: "Pablo Picasso",
      tipo:"Realista"
    },
    {
      nombre: "Itadori",
      bio: "personaje que pertenece a la obra de Jujutsu Kaisen,tambien conocida como: Guerra de hechiceros en España, es una serie de manga japonés escrita e ilustrada por Gege Akutami.La historia gira en torno al estudiante Yūji Itadori, quien se une a una organización secreta de hechiceros para matar a una poderosa maldición llamada Ryōmen Sukuna tras convertirse en su anfitrión. Es una secuela de Tokyo Metropolitan Curse Technical School.",
      img: "assets/img/itadori.png",
      aparicion: "2022",
      autor:"Kyura",
      tipo:"Fanart"
    },
    {
      nombre: "La última cena",
      bio: "La última cena es una pintura mural original de Leonardo da Vinci ejecutada entre 1495 y 1498.​​ Se encuentra en la pared sobre la que se pintó originalmente, en el refectorio del convento dominico de Santa Maria delle Grazie, en Milán, ​ declarado Patrimonio de la Humanidad por la Unesco en 1980. Para la creación de esta obra única, Leonardo realizó una investigación exhaustiva creando una infinidad de bocetos preparatorios. Leonardo abandona el método tradicional de la pintura al fresco, pintando la escena al seco en la pared del refectorio. Se han encontrado rastros de láminas metálicas de oro y plata que son testimonio de la voluntad del artista de hacer las figuras de una manera mucho más realista.",
      img: "assets/img/laultimacena.png",
      aparicion: "1495–1498",
      autor: " Leonardo da Vinci",
      tipo:"Realista"
    },
    {
      nombre: "La Medusa",
      bio: "Es una imagen ilustrada de una chica bajo el mar, si fueras una medusa que harias? como cualquier arte este fanart, esta o fue inspirado en las medusas una chica que trata de estampar, su idea sobre el archivo dijital.",
      img: "assets/img/medusa.png",
      aparicion: "2020",
      autor: "Jelena Kevinc",
      tipo:"Fanart"
    },
    {
      nombre: "Makima",
      bio: "Personaje de la obra Chainsaw Man.La historia se desarrolla en un mundo donde los demonios nacen de los miedos humanos. Los demonios suelen ser peligrosos y malévolos, su poder es proporcional a la fuerza con que se incita su miedo correspondiente en la conciencia humana colectiva.",
      img: "assets/img/makima.png",
      aparicion: "2021",
      autor: "Se Desconoce",
      tipo:"Fanart"
    },
    {
        nombre: "La creación de Adán",
        bio: "La creación de Adán es un fresco en la bóveda de la Capilla Sixtina, pintado por Miguel Ángel alrededor del año 1511. Ilustra uno de los nueve episodios del Génesis representados allí por el artista toscano, ​ en el cual Dios le da vida a Adán, el primer hombre.Esta es una de las obras más representativas del espíritu del Renacimiento italiano, debido al modo de representar la creación del hombre.",
        img: "assets/img/la creacion de adan.png",
        aparicion: "1511",
        autor: "Miguel Ángel",
        tipo:"Realista"
      }
  ];

    constructor(){ 
        console.log('servicio listo para usarse!!!!');
    }
    
    getObras():Obras[]{ 
        return this.obras; //se hace refernaca la clase privada 
    }
    
    getObra( idx:number ){
      return this.obras[idx];
    }


    buscarObras(termino:string):Obras[]{

      let obrasArr:Obras[] = [];
      termino= termino.toLowerCase();

      for (let i=0; i < this.obras.length; i ++ ){

        let obras= this.obras[i];

        let nombre= obras.nombre.toLowerCase();
        if (nombre.indexOf(termino) >= 0 ){
          obras.idx = i;
          obrasArr.push(obras)
        }
      }

      return obrasArr;

    }
   
      
    

}



