import { Filtro, panelComanda } from "./datos.comandas"

const initStore = () => {
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('No implementado');
}

const saveStateToLocalStore = () =>{
    throw new Error('No implementado');
}

const getComandas = ( filtro =  Filtro.Todos ) => {
    switch ( filtro ) {
        case Filtro.Todos:
            return [...panelComanda.listaDeComandas];

        case Filtro.Creada:
            return panelComanda.listaDeComandas.filter( com => com.estado === Filtro.Creada );

        case Filtro.EnProceso:
            return panelComanda.listaDeComandas.filter( com => com.estado === Filtro.EnProceso );

        case Filtro.Completada:
            return panelComanda.listaDeComandas.filter( com => com.estado === Filtro.Completada );

        case Filtro.Llevar:
            return panelComanda.listaDeComandas.filter( com => com.tipoComanda.id === Filtro.Llevar );

        case Filtro.Delivery:
            return panelComanda.listaDeComandas.filter( com => com.tipoComanda.id === Filtro.Delivery );

        case Filtro.Local:
            return panelComanda.listaDeComandas.filter( com => com.tipoComanda.id === Filtro.Local );
        
        default:
            throw new Error(`Opción de filtro ${filtro} no es válido.`);
    }

}

const getCurrentFilter = () => {
    return panelComanda.filtro;
}

export default {
    initStore,
    loadStore,
    saveStateToLocalStore,
    getComandas,
    getCurrentFilter,
}