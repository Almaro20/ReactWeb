import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGames } from '../services/gameService'; // Importa el servicio
import './GamesPage.css';

const GamesPage = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        const games = await fetchGames();
        setAllGames(games);
      } catch (err) {
        setError('Error al obtener los juegos.');
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, []);

  if (loading) return <p>Cargando juegos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="games-container">
      <h1>Todos los Juegos</h1>
      <div className="all-games">
        {allGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>Fecha de lanzamiento: {game.released}</p>
            {/* Enlace a la página de detalles */}
            <Link to={`/game/${game.id}`} className="view-details-link">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
