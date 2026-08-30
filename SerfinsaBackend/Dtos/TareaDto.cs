using SerfinsaBackend.Models;

namespace SerfinsaBackend.Dtos
{
    public class TareaDto
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string? Descripcion { get; set; }
        public Prioridad Prioridad { get; set; }
        public bool Completada { get; set; }
        public DateTime FechaCreacion { get; set; }

    }
}
