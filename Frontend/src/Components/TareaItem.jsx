export default function TareaItem({ tarea }) {
  return (
    //
 <li className={`tarea-item prioridad-${tarea.prioridad} ${tarea.completada ? "completada" : ""}`}>
      <div className="tarea-header">
        <span className="tarea-titulo">{tarea.titulo}</span>
        <span className={`badge badge-estado ${tarea.completada ? "completada" : "pendiente"}`}>
          {tarea.completada ? "Completada" : "Pendiente"}
        </span>
      </div>
      <p className="tarea-desc">{tarea.descripcion}</p>
      <span className="badge badge-prioridad">Prioridad: {tarea.prioridad}</span>
    </li>
  );
}