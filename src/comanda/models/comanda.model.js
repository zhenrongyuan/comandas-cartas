import { TipoComanda } from "./tipo-comanda.model";
import { v4 as uuid } from 'uuid';

export class Comanda {


    constructor(
        tipoComanda = new TipoComanda,
        pedidos = [] ) {

        this.id = uuid();;
        this.tipoComanda = tipoComanda;
        this.estado = 'creada';
        this.pedidos = pedidos;
        this.subtotal = this.calcularSubtotal();
        this.propina = this.subtotal * 0.1;
        this.conPropina = true;
        this.total = this.subtotal + this.propina;
        this.createAt = new Date();
    }

    calcularSubtotal = () => {
        let subtotal = 0;
        this.pedidos.forEach(ped => {
            subtotal += ped.precio;
        });
        return subtotal;
    }
}