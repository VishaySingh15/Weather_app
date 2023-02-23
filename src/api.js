//We first allow the user to serach for the city and then we get the weather for that city

// These are the details for Cities API. 
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '832c354bffmsha84e371538bdcb3p174d30jsn9bd056d93d20',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

//These are the details for the weather API 
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = '485c7ff9382dba324a032fd2f9caf57c';
