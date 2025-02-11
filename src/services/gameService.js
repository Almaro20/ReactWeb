import axios from 'axios';

// Función para obtener todos los juegos
export const fetchGames = async () => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: process.env.REACT_APP_RAWG_API_KEY, // Aquí tomamos la API KEY desde el archivo .env
        page_size: 20,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Error al obtener juegos: ' + error.message);
  }
};

// Función para obtener detalles de un juego específico
export const fetchGameDetails = async (id) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
      params: {
        key: process.env.REACT_APP_RAWG_API_KEY, // Usamos la API KEY también aquí
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener detalles del juego: ' + error.message);
  }
};
