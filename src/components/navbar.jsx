import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🎮 GameTracker</h1>
      <div className="links">
        <a href="#biblioteca">Biblioteca</a>
        <a href="#reseñas">Reseñas</a>
        <a href="#estadisticas">Estadísticas</a>
      </div>
    </nav>
  );
}

export default Navbar;
