interface Usuario {
    nombre: string;
    apellidos: string;
    
}




class Tipo {
    algo: any; // algo puede ser de cualquier tipo
    id: number | string; // id puede ser de tipo number o de tipo string
    sNombre: string;
    nEdad: number;
    isAlumno: boolean;
    aDatos: Array<string>;
    aNumbers: number[];
    oUser: object;
    other: Usuario;

    constructor() {
        this.oUser = {nombre: "Pepe", apellidos: "Perez"}
        this.aDatos = [];
        this.aDatos.length;
    }


}

class Tipica {
    dos

    constructor(public uno: string, dos){
        this.dos = dos;
    }
}