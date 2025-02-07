interface SuperHero{
    nombre:string;
    age:number;
    adress:{
        calle:string,
        pais:string,
        ciudad:string
    };
    showAddreess():string;
}


interface SuperHero{
    nombre:string;
    age:number;
    adress:{
        calle:string,
        pais:string,
        ciudad:string
    };
    showAddreess:()=>string;

}


interface SuperHero{
    nombre:string;
    age:number;
    adress: Adress;
    showAddreess:()=>string;
}

interface Adress{
    calle:string;
    pais:string;
    ciudad:string;
}

const superHero: SuperHero={

    nombre: 'Spiderman',
    age:30,
    adress:{
        calle:'2 sur',
        pais:'USA',
        ciudad:'NY'
    },
    showAddreess(){
        return this.nombre +', '+ this.adress.ciudad+','+ this.adress.calle
    }
}
const adress =superHero.showAddreess()
console.log({adress})