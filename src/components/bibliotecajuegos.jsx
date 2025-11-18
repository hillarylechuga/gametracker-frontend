import React from "react";

function BibliotecaJuegos({ juegos }) {
  return (
    <section className="biblioteca">
      <h2>Mi Biblioteca de Juegos</h2>
      <div className="grid-juegos">
        {juegos.map((juego) => (
          <div key={juego.id} className="card-juego">
            <h3>{juego.titulo}</h3>
            <p>🎮 {juego.plataforma}</p>
            <p>⏱️ {juego.horas} horas</p>
            <p>⭐ {juego.puntuacion}/5</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BibliotecaJuegos;
