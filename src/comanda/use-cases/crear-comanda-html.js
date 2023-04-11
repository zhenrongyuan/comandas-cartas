import { Comanda } from "../models/comanda.model"
import { renderPedido } from "./render-pedidos";


// Aquí asumimos que ya están los datos para renderizar la comanda.
export const crearComandaHTML = ( comanda ) => {
    if ( !comanda ) {
        throw new Error('No existe la comanda.');
    }

    // Desestructuramos todo lo que contiene el objeto comanda:
    const { id, 
        tipoComanda, 
        pedido, 
        subtotal, 
        propina, 
        conPropina,
        total,
        createAt } = comanda; 

    const fechaString = ("0" + createAt.getDate()).slice(-2) + "-" + ("0"+(createAt.getMonth()+1)).slice(-2) + "-" +
        createAt.getFullYear() + " " + ("0" + createAt.getHours()).slice(-2) + ":" + ("0" + createAt.getMinutes()).slice(-2);


    const html = `

        
        <div class="card text-center" style="width: 20rem">
        <div id="control-botones" class="btn-group" role="group" aria-label="comanda-botones">
            <button type="button" class="btn btn-primary">Imprimir</button>
            <button type="button" class="btn btn-primary">Pagar</button>
        </div>
        <div class="card-header">
            ${fechaString}
        </div>
        <div id="${id}" class="card-body">
            <h5 class="card-title grid gap-0 row-gap-3"> Consumo: ${tipoComanda.glosa} </h5>
    
        </div>
        <div class="card-footer text-body-secondary ms-auto p-2">
            <div class="text-end">Sub-total: $${subtotal}</div>
            <div class="text-end">Propina: $${propina}</div>
            <div class="text-end">Total: $${total}</div>
        </div>
    </div>
        
        `;

        const divElement = document.createElement('div');
        divElement.innerHTML = html;

        //const pedidosHtml = renderPedido(`#${id}`, pedido);

        return divElement;

}