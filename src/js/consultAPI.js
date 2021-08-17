import { useBoredAPI } from "./api";
import { removeChild } from "./removeChild";


const btnEnviar = document.querySelector('#enviar');
const resultado = document.querySelector('#result');

const consultAPI = async () => {
	const data = await useBoredAPI();
	console.log(data);
	const { activity , participants , type } = data;

	if(data){
		removeChild();
		resultado.classList.add('result');


		const alert = document.createElement('p');
		alert.classList.add('alert');
		alert.textContent = 'This activity may interest you!';
		resultado.appendChild(alert);

		const actividad = document.createElement('p');
		actividad.classList.add('show-activity');
		actividad.textContent = `Activity: ${activity}`;
		resultado.appendChild(actividad);

		const participantes = document.createElement('p');
		participantes.classList.add('show-activity');
		participantes.textContent = `Participants: ${participants}`;
		resultado.appendChild(participantes);

		const tipo = document.createElement('p');
		tipo.classList.add('show-activity');
		tipo.textContent = `Type: ${type}`;
		resultado.appendChild(tipo);
	}
};

const btnEvent = () => {
	btnEnviar.addEventListener('click', consultAPI);
};

export{
	btnEvent
};