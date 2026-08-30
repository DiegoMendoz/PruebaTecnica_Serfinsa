import { useEffect, useState } from "react";
import { listarTareas } from "./Api/tareasApi";
import TareaList from "./Components/TareaList";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

  const cargarTareas = async () => {
    try {
      const datos = await listarTareas();
      setTareas(datos);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Gestor de Tareas — Serfinsa</h1>
      {error && (
        <p style={{ color: "red" }}>Error: {error}. ¿Está corriendo el backend?</p>
      )}
      <TareaList tareas={tareas} />
    </div>
  );
}