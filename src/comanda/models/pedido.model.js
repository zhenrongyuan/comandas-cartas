import { Cliente } from "./cliente.model";
import { Producto } from "./producto.model";

export class Pedido {

    constructor( cantidad = 1,
          producto = new Producto(), 
          cliente = new Cliente(), 
          comentario = '' ){
        this.cantidad = cantidad;
        this.producto = producto;
        this.precio = this.cantidad * this.producto.precio;
        this.cliente = cliente;
        this.comentario = comentario;
    }

}