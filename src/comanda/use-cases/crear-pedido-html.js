import { Pedido } from "../models/pedido.model"
import { Producto } from "../models/producto.model";


// Aquí asumimos que ya están los datos para renderizar la comanda.
export const crearPedidoHTML = ( pedido ) => {
    if ( !pedido ) {
        throw new Error('No existe el pedido.');
    }

    // Desestructuramos todo lo que contiene el objeto comanda:
    const { cantidad, precio, cliente, comentario } = pedido;

    const html = `
        <ul class="list-group list-group-horizontal list-group-flush">
            <li class="list-group-item flex-fill border-0 text-start">${cantidad}</li>
            <li class="list-group-item flex-fill border-0 text-start">${pedido.producto.nombre}</li>
            <li class="list-group-item flex-fill border-0 text-end">$${precio}</li>
        </ul>
    `;

    const divElement = document.createElement('div');
    divElement.className = 'list-group list-group-horizontal list-group-flush';
    divElement.innerHTML = html;

    return divElement;

}