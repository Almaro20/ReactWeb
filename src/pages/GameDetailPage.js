import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameDetails } from "../services/gameService"; // Importamos el servicio
import './GameDetailPage.css';


const GameDetailPage = () => {
  const { id } = useParams(); // Obtenemos el id del juego desde la URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGameDetails = async () => {
      try {
        const details = await fetchGameDetails(id); // Obtenemos los detalles del juego
        setGame(details);
      } catch (err) {
        setError('Error al cargar los detalles del juego.');
      } finally {
        setLoading(false);
      }
    };

    getGameDetails();
  }, [id]); // Dependemos del id para que se actualice cuando cambiemos de juego

  if (loading) return <p>Cargando detalles del juego...</p>;
  if (error) return <p>{error}</p>;
  if (!game) return <p>Juego no encontrado.</p>;

  return (
    <div className="container">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="game-image" />
      <p>{game.description_raw}</p>
      <p><strong>Rating:</strong> {game.rating} / 5</p>
      <p><strong>Fecha de lanzamiento:</strong> {game.released}</p>
      <p><strong>Plataformas:</strong> {game.platforms.map(p => p.platform.name).join(", ")}</p>
    </div>
  );
};

export default GameDetailPage;
