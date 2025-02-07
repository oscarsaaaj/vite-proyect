let datos: string[]=['nombre' , 'apellidoP' , 'apellidoM' ];
const masdatos: string[]=['nombre' ,'apellidoP', 'apellidoM' ];

interface Iperfil{
    nombre: string;
    edad: number;
    sexo?:string |undefined;
    puesto:string[];
}

const perfil:Iperfil={
    nombre:"Eduardo",
    edad:20,
    sexo:"H",
    puesto: ['Analista','Programador','Diseñador']
};

perfil.nombre='Eduardo';
console.table(perfil)