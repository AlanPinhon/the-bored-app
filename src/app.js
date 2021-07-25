//Loading styles
import './styles/app.scss';

//Firing our whole app
const app = () => {
	const jsTestElement = document.getElementById('js-test');
	jsTestElement.classList.add('success');
	jsTestElement.innerText = 'Ready!';
};
app();