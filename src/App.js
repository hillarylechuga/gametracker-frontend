import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "remixicon/fonts/remixicon.css";
import "./styles/resenas.css";

function App() {
  const [resenas, setResenas] = useState([]);
  const [juego, setJuego] = useState("");
  const [texto, setTexto] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  const [imagen, setImagen] = useState(""); 

  
  useEffect(() => {
    axios
      .get("https://gametracker-hl.onrender.com/api/resenas")
      .then((res) => setResenas(res.data))
      .catch((err) => console.error("Error al cargar reseñas:", err));
  }, []);

  
  const agregarResena = async (e) => {
    e.preventDefault();

    const nuevaResena = {
      juego,
      texto,
      puntuacion: Number(puntuacion),
      imagen
    };

    try {
      const res = await axios.post("https://gametracker-hl.onrender.com/api/resenas", nuevaResena);
      setResenas([...resenas, res.data]);

      setJuego("");
      setTexto("");
      setPuntuacion("");
      setImagen("");
    } catch (error) {
      console.error("Error al guardar reseña:", error);
    }
  };

  
  const eliminarResena = async (id) => {
    try {
      await axios.delete(`https://gametracker-hl.onrender.com/api/resenas/${id}`);
      setResenas(resenas.filter((r) => r._id !== id));
    } catch (error) {
      console.error("Error al eliminar reseña:", error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">🔥 SUPERNOVA</h1>
      </header>

      <div className="container">
        <h2 className="section-title">Tus Reseñas</h2>

        <div className="review-grid">
          {resenas.map((r) => (
            <div className="card" key={r._id}>
              
              
              {r.imagen ? (
                <img src={r.imagen} alt={r.juego} className="card-image" />
              ) : (
                <div className="card-image placeholder">Sin imagen</div>
              )}

              <div className="card-content">
                <h3>{r.juego}</h3>
                <p>{r.texto}</p>

                <div className="rating">⭐ {r.puntuacion}/5</div>

                <button className="delete-btn" onClick={() => eliminarResena(r._id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Agregar Reseña</h2>

        <form className="form" onSubmit={agregarResena}>
          <input
            type="text"
            placeholder="Nombre del juego"
            value={juego}
            onChange={(e) => setJuego(e.target.value)}
            required
          />

          <textarea
            placeholder="Escribe tu reseña"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
          ></textarea>

          <input
            type="number"
            placeholder="Puntuación (1-5)"
            value={puntuacion}
            onChange={(e) => setPuntuacion(e.target.value)}
            min="1"
            max="5"
            required
          />

          
          <input
            type="text"
            placeholder="URL de la imagen (opcional)"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />

          <button className="add-btn">Agregar Reseña</button>
        </form>
      </div>
    </div>
  );
}

export default App;
