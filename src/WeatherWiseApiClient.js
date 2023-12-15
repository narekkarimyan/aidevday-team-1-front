export class WeatherWiseApiClient {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	async registerUser(userData) {
		const response = await fetch(`${this.baseURL}/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Failed to register user');
		}
	}

	async loginUser(credentials) {
		const response = await fetch(`${this.baseURL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Failed to log in');
		}
	}

	async createTravelPlan(travelPlanData) {
		const response = await fetch(`${this.baseURL}/travelplans`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(travelPlanData),
		});

		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Failed to create travel plan');
		}
	}

	async getWeatherData(destinationID) {
		const response = await fetch(`${this.baseURL}/weather/${destinationID}`);

		if (response.ok) {
			return response.json();
		} else {
			throw new Error('Failed to get weather data');
		}
	}
}

export const weatherWiseApi = new WeatherWiseApiClient('https://api.weatherwise.com/v1');
