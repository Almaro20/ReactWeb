import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: process.env.REACT_APP_RAWG_API_KEY,  // API Key en .env
            page_size: 5,  
            ordering: 'rating',
          },
        });
        setPopularGames(response.data?.results || []);
      } catch (error) {
        console.error("Error fetching the games:", error);
      }
    };

    fetchGames();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="homepage-container" style={{ minHeight: '100vh' }}>
      <h2>Juegos Populares</h2>

      {popularGames.length === 0 ? (
        <p>Cargando juegos...</p>
      ) : (
        <Slider {...settings}>
          {popularGames.map((game) => (
            <div key={game.id} className="carousel-item">
              <img src={game.background_image} alt={game.name} />
              <h3>{game.name}</h3>
            </div>
          ))}
        </Slider>
      )}

      <button className="btn-view-all">
        <a href="/games">Ver todos los juegos</a>
      </button>
    </div>
  );
};

export default HomePage;
