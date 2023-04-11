import html from './app.html?raw';
import comandaStore from '../store/comanda.store';
import { renderComanda } from './use-cases';


export const App =
    ( elementId ) => {

        const mostrarComandas = () => {
            const comandas = comandaStore.getComandas( comandaStore.getCurrentFilter() );
            renderComanda('#card-comanda-list', comandas);
        }

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
        mostrarComandas();

    }