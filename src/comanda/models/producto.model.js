

export class Producto {

    constructor( nombre, 
        descripcion, 
        seccion, subseccion = '', 
        precio ){
            
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seccion = seccion;
        this.subseccion = subseccion;
        this.precio = precio;
    }
}