import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Juegos Alberto</h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:text-gray-400">Inicio</NavLink>
        <NavLink to="/games" className="hover:text-gray-400">Juegos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
