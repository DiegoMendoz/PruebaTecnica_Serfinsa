import TareaItem from "./TareaItem";

export default function TareaList({ tareas }) {
  if (tareas.length === 0) {
    return <p>No hay tareas para mostrar.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tareas.map((t) => (
        <TareaItem key={t.id} tarea={t} />
      ))}
    </ul>
  );
}