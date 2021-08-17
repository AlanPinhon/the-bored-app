import { useBoredAPI } from "./api";
import { showActivity } from "./showActivity";

const btnEnviar = document.querySelector('#enviar');
const actSelect = document.querySelector('#activity-select');

const consultAPI = async () => {
	const type = sessionStorage.getItem('typeFilter');
	const data = await useBoredAPI(type);

	if(data){
		showActivity(data);
	}
};

const leerValor = e => {
	sessionStorage.setItem('typeFilter' , e.target.value);
};

const events = () => {
	btnEnviar.addEventListener('click', consultAPI);
	actSelect.addEventListener('input', leerValor);
};

export{
	events
};