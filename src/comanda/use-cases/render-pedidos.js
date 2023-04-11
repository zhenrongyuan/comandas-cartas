
import { crearPedidoHTML } from "./crear-pedido-html";

export const renderPedido = ( elementId, pedidos = [] ) => {
    const element = document.getElementById( elementId );
    pedidos.forEach( pedido => {
        element.append(crearPedidoHTML(pedido));
    });

}