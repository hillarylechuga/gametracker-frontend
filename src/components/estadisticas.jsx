import React from "react";

function Estadisticas({ juegos }) {
  const total = juegos.length;
  const horasTotales = juegos.reduce((acc, j) => acc + Number(j.horas || 0), 0);
  const promedio = (juegos.reduce((a, j) => a + Number(j.puntuacion || 0), 0) / total).toFixed(1);

  return (
    <section className="estadisticas">
      <h2>📊 Estadísticas</h2>
      <ul>
        <li>Total de juegos: {total}</li>
        <li>Horas jugadas: {horasTotales}</li>
        <li>Puntuación promedio: {promedio || 0}</li>
      </ul>
    </section>
  );
}

export default Estadisticas;
