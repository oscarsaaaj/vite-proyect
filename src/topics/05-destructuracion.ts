interface Audio{
    nivelvolumen: number;
    duracion: number;
    sonido: string;
    detalles: Detalles;
}

interface Detalles{
    autor:string;
    año:number;
}

/* ctrl + punto para agregar todas las propiedades de forma automatica*/
const audio:Audio={
    nivelvolumen: 90,
    duracion: 36,
    sonido: "Mess",
    detalles: {
        autor: 'Ed',
        año: 2015
    }
}

/*----------------------------------------------------------------*/
/*Forma 1: con detallas*/
/*
const{
    nivelvolumen:volumen, /*Aqui se renombra/
    detalles: {autor}
}=audio;
*/

/*-------------------------------------------------*/
/*Forma 2*/
const{nivelvolumen:volumen, detalles}=audio;
const{año}=detalles;




/*----------------------------------------------------------------*/
console.log('Volumen con desestructuracion', volumen);
console.log('Sonido', audio.sonido);
console.log('Duracion', audio.duracion);
console.log('Autor', audio.detalles.autor);
/*console.log('Autor con desestructuracion', autor);*/
console.log('Año',año);


const arre1: string[]=['Froilan Aranzazu','Eleurio Casimira','Zenobia Bartolome'];
console.log('Persona 3',arre1[3] || 'No hay personaje'); /*Existe hasta le persona 2*/

const [,,,ultimo='No existe']: string[]=['Pantaleon Orfelinda', 'Serviriano Briseida','Procoro Filomera','Ludivico Ismelda'];

console.log('Personaje 3',ultimo);