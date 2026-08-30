import { useState } from "react";
import { crearTarea } from "../Api/tareasApi";

const inicial = { titulo: "", descripcion: "", prioridad: "Media" };

export default function TareaForm({ onTareaCreada }) {
  const [form, setForm] = useState(inicial);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.titulo.trim()) {
      setError("El título es obligatorio.");
      return;
    }
    try {
      await crearTarea(form);
      setForm(inicial);
      setError(null);
      onTareaCreada();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="tarea-form" onSubmit={handleSubmit}>
      <h2>Nueva tarea</h2>
      {error && <p className="form-error">{error}</p>}

      <input
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripción (opcional)"
        rows="2"
        value={form.descripcion}
        onChange={handleChange}
      />
      <select name="prioridad" value={form.prioridad} onChange={handleChange}>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>

      <button type="submit">Agregar tarea</button>
    </form>
  );
}