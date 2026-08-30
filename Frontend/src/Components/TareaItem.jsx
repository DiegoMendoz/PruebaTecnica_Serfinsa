export default function TareaItem({ tarea }) {
  return (
    //
    <li style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
          {tarea.titulo}
        </strong>
        <span>{tarea.completada ? "✅ Completada" : "⏳ Pendiente"}</span>
      </div>
      <p style={{ margin: "6px 0 0", color: "#555" }}>{tarea.descripcion}</p>
      <small>Prioridad: {tarea.prioridad}</small>
    </li>
  );
}