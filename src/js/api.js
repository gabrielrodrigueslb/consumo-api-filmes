// src/api.js
import axios from 'axios';

export const getMovies = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '0ce106132cb8f41a3ef20a2ba965f049',
        language: 'pt-BR',
      },
    });
    return response.data.results; // Retorna os filmes encontrados
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Se ocorrer um erro, ele será tratado na função do componente
  }
};
