const API_URL = "https://localhost:7288/api/tareas";

// Listar (con filtro: "todas" | "pendientes" | "completadas")
export async function listarTareas(estado = "todas") {
  const res = await fetch(`${API_URL}?estado=${estado}`);
  if (!res.ok) throw new Error("No se pudieron cargar las tareas");
  return res.json();
}

// Detalle por id
export async function obtenerTarea(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("No se encontró la tarea");
  return res.json();
}

// Crear
export async function crearTarea(tarea) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarea),
  });
  if (!res.ok) throw new Error("No se pudo crear la tarea");
  return res.json();
}

// Actualizar (todos los datos)
export async function actualizarTarea(id, tarea) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarea),
  });
  if (!res.ok) throw new Error("No se pudo actualizar la tarea");
  return res.json();
}

// Cambiar estado (completada/pendiente)
export async function cambiarEstado(id) {
  const res = await fetch(`${API_URL}/${id}/estado`, { method: "PATCH" });
  if (!res.ok) throw new Error("No se pudo cambiar el estado");
  return res.json();
}

// Eliminar
export async function eliminarTarea(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("No se pudo eliminar la tarea");
}