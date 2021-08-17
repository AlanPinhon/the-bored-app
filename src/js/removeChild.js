const resultado = document.querySelector('#result');

const removeChild = () => {
	while(resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}
};

export{
	removeChild
};