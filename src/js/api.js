const useBoredAPI = async (type) => {
	const  baseURL = new URL (`http://www.boredapi.com/api/activity/`);

	if(type){
		baseURL.search = new URLSearchParams({ type });
	}

	try {
		const response = await fetch(baseURL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export{
	useBoredAPI
};