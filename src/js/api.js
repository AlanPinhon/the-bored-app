const useBoredAPI = async () => {
	const url = 'http://www.boredapi.com/api/activity/';

	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export{
	useBoredAPI
};