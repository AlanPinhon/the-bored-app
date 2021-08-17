//Loading styles
import { events } from './js/consultAPI';
import './styles/app.scss';

window.onload = () => {
	sessionStorage.clear();
	events();
};