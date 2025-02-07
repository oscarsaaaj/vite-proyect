import { Persona } from './03-funciones';

// Definición de la clase Persona
export class Persona {
    constructor(public nombre: string, public direccion: string, public peso: number) {}
}

// Definición de la clase SuperHero que extiende de Persona
export class SuperHero extends Persona {
    constructor(
        public sobrenombre: string,
        public edad: number,
        nombre: string,
        public person: Persona
    ) {
        super(nombre, 'CDMX', 0); // Llamada al constructor de la clase base
    }
}

// Creación de instancias
const ObjPersona = new Persona('Jenn', 'CDMX', 52);
console.log(ObjPersona);

const ObjPer = new Persona('anita', 'CDMX', 12);
const ana2 = new SuperHero('An', 23, 'Anita', ObjPer);

console.log(ana2);