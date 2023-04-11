import { Comanda } from "../models/comanda.model";
import { crearComandaHTML } from "./crear-comanda-html";
import { renderPedido } from "./render-pedidos";

export const renderComanda = ( elementId, comandas = [] ) => {
    const element = document.querySelector( elementId );

    comandas.forEach( comanda => {
        element.append( crearComandaHTML(comanda) );
        renderPedido(comanda.id, comanda.pedidos);
    });

}