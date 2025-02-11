import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Título */}
        <h1 className="text-2xl font-bold">Juegos RAWG</h1>
        
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
          <Link to="/games" className="hover:text-gray-400 transition-colors">Juegos</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
