import './style.css'
import { App } from './src/comanda/app';
import comandaStore from './src/store/comanda.store';

comandaStore.initStore();


App('#app');