export default function TareaItem({ tarea ,onToggle, onEliminar}) {
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
        <div className="tarea-footer">
          <span className="badge badge-prioridad">Prioridad: {tarea.prioridad}</span>   
          <div className="tarea-acciones">
  <button className="btn-completar" onClick={() => onToggle(tarea.id)}>
    {tarea.completada ? "Marcar pendiente" : "Marcar completada"}
  </button>
  <button className="btn-eliminar" onClick={() => onEliminar(tarea.id)}>
    Eliminar
  </button>
</div>
        </div>
     
    </li>
  );
}