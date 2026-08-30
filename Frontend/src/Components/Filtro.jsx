const opciones = [
  { valor: "todas", texto: "Todas" },
  { valor: "pendientes", texto: "Pendientes" },
  { valor: "completadas", texto: "Completadas" },
];

export default function Filtro({ filtro, onFiltrar }) {
  return (
    <div className="filtro">
      {opciones.map((o) => (
        <button
          key={o.valor}
          className={`filtro-btn ${filtro === o.valor ? "activo" : ""}`}
          onClick={() => onFiltrar(o.valor)}
        >
          {o.texto}
        </button>
      ))}
    </div>
  );
}