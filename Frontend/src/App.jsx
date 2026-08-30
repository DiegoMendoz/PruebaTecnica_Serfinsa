import { useEffect, useState } from "react";
import { listarTareas } from "./Api/tareasApi";
import TareaForm from "./Components/TareaForm";
import TareaList from "./Components/TareaList";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

  const cargarTareas = async () => {
    try {
      setTareas(await listarTareas());
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <div className="container">
      <h1>Gestor de Tareas — Serfinsa</h1>
      {error && <p style={{ color: "#ffb3b3" }}>Error: {error}. ¿Está corriendo el backend?</p>}
      <TareaForm onTareaCreada={cargarTareas} />
      <TareaList tareas={tareas} />
    </div>
  );
}