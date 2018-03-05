export class Acertijo {
        key?:string;
        nombre:string;
        contenido: string;
        respuesta: string;
        autor: string;
    constructor(
        nombre:string,
        contenido: string,
        respuesta: string,
        autor: string
    ) {
        this.nombre= nombre;
        this.contenido= contenido;
        this.respuesta= respuesta;
        this.autor= autor;

    }

}