import TareaItem from "./TareaItem";

export default function TareaList({ tareas, onToggle, onEliminar, onEditar }) {
  if (tareas.length === 0) return <p>No hay tareas para mostrar.</p>;
  return (
    <ul className="tarea-list">
      {tareas.map((t) => (
        <TareaItem
          key={t.id}
          tarea={t}
          onToggle={onToggle}
          onEliminar={onEliminar}
          onEditar={onEditar}
        />
      ))}
    </ul>
  );
}