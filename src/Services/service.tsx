import axios from 'axios';

const api = axios.create({
	baseURL: 'https://localhost:5001/api', // Rodando o back Console Prompt
	// baseURL: 'http://localhost:5000/api', // Rodando o back pelo Visual Studio
});

export default api;
