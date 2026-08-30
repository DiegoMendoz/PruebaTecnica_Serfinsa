import { useState, useEffect } from "react";
import { crearTarea, actualizarTarea } from "../Api/tareasApi";

const inicial = { titulo: "", descripcion: "", prioridad: "Media" };

export default function TareaForm({ onGuardada, tareaEditar, onCancelar }) {
  const [form, setForm] = useState(inicial);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tareaEditar) {
      setForm({
        titulo: tareaEditar.titulo,
        descripcion: tareaEditar.descripcion ?? "",
        prioridad: tareaEditar.prioridad,
      });
    } else {
      setForm(inicial);
    }
  }, [tareaEditar]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.titulo.trim()) {
      setError("El título es obligatorio.");
      return;
    }
    try {
      if (tareaEditar) {
        await actualizarTarea(tareaEditar.id, { ...form, completada: tareaEditar.completada });
      } else {
        await crearTarea(form);
      }
      setForm(inicial);
      setError(null);
      onGuardada();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="tarea-form" onSubmit={handleSubmit}>
      <h2>{tareaEditar ? "Editar tarea" : "Nueva tarea"}</h2>
      {error && <p className="form-error">{error}</p>}

      <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} />
      <textarea name="descripcion" placeholder="Descripción (opcional)" rows="2" value={form.descripcion} onChange={handleChange} />
      <select name="prioridad" value={form.prioridad} onChange={handleChange}>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>

      <div className="form-acciones">
        <button type="submit">{tareaEditar ? "Guardar cambios" : "Agregar tarea"}</button>
        {tareaEditar && (
          <button type="button" className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
        )}
      </div>
    </form>
  );
}