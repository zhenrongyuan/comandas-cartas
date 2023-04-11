import { Cliente } from '../comanda/models/cliente.model';
import { Comanda } from '../comanda/models/comanda.model';
import { Pedido } from '../comanda/models/pedido.model';
import { Producto } from '../comanda/models/producto.model';
import { TipoComanda } from '../comanda/models/tipo-comanda.model';

// Productos
const carneMongoliana = new Producto('Carne Mongoliana', 'Carne salteada con cebollín.', 'Carnes', '', 9990);
const arrolladoPrimavera = new Producto('Arrollado Primavera', 'Rollo frito con verduras y carne.', 'Entradas', '', 3990);
const arrozChaufan = new Producto('Arroz Chaufán', 'Arroz salteado con huevo, cebollín y zanahorias.', 'Arroces', '', 3500);
const cocaCola = new Producto('Coca-Cola', 'Bebida de fantasía', 'Bebestibles', 'Bebidas', 2500);
const cocaCola1Ltmedio = new Producto('Coca-Cola 1.5Lt', 'Bebida de fantasía', 'Bebestibles', 'Bebidas', 3500);


// Tipo Comandas
const paraLlevar = new TipoComanda('llevar', 'Para Llevar');
const delivery = new TipoComanda('delivery', 'Delivery');
const local = new TipoComanda('local', 'En local', 'M3');

// Cliente
const c1 = new Cliente('Sara Martínez');
const c2 = new Cliente('Eduardo Martínez');
const c3 = new Cliente('María la del barrio')


// Pedidos
const ped1 = new Pedido(2, carneMongoliana, c1, 'sin sal');
const ped2 = new Pedido(1, arrozChaufan, c1);
const ped8 = new Pedido(2, cocaCola, c1);

const ped3 = new Pedido(3, arrolladoPrimavera, c2);
const ped4 = new Pedido(1, cocaCola1Ltmedio, c2);

const ped5 = new Pedido(3, carneMongoliana, c3);
const ped6 = new Pedido(2, arrozChaufan, c3);
const ped7 = new Pedido(2, cocaCola1Ltmedio, c3);

// Grupo de pedidos
const grupoPedidos1 = [ped1, ped2, ped8];
const grupoPedidos2 = [ped3, ped4];
const grupoPedidos3 = [ped5, ped6, ped7];

// Comandas
const com1 = new Comanda( local, grupoPedidos1 );
const com2 = new Comanda( delivery, grupoPedidos2 );
const com3 = new Comanda( paraLlevar, grupoPedidos3 );

// Filtros
export const Filtro = {
    Todos: 'todos',
    Creada: 'creada',
    EnProceso: 'en-proceso',
    Completada: 'completada',
    Llevar: 'llevar',
    Delivery: 'delivery',
    Local: 'local'
}

export const panelComanda = {
    listaDeComandas: [ com1, com2, com3 ],
    filtro: Filtro.Todos

}