import { useEffect, useState } from "react";
import { listarTareas, cambiarEstado, eliminarTarea } from "./Api/tareasApi";
import TareaForm from "./Components/TareaForm";
import TareaList from "./Components/TareaList";
import Filtro from "./Components/Filtro";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("todas");

  const cargarTareas = async () => {
    try {
      setTareas(await listarTareas(filtro));
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, [filtro]);

  const handleToggle = async (id) => {
    await cambiarEstado(id);
    cargarTareas();
  };

  const handleEliminar = async (id) => {
    await eliminarTarea(id);
    cargarTareas();
  };

  return (
    <div className="container">
      <h1>Gestor de Tareas — Serfinsa</h1>
      {error && <p style={{ color: "#ffb3b3" }}>Error: {error}. ¿Está corriendo el backend?</p>}
      <TareaForm onTareaCreada={cargarTareas} />
      <Filtro filtro={filtro} onFiltrar={setFiltro} />
      <TareaList tareas={tareas} onToggle={handleToggle} onEliminar={handleEliminar} />
    </div>
  );
}