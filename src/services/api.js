import axios from 'axios';
import url from '../config/url';

const api = axios.create({
	baseURL: url.URL_API,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

api.interceptors.request.use(async (config) => {
	try {
		var token = await localStorage.getItem('@blogreactjsadrianofrancisco:token');

		if (token) {
			var expiration = await localStorage.getItem('@blogreactjsadrianofrancisco:expirationDate');

			var expirationDate = new Date(0);
			expirationDate.setUTCSeconds(expiration);
			var today = new Date().getTime();

			if (today <= expirationDate.getTime()) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		}

		return config;
	} catch (err) {
		return err;
	}
});

export default api;