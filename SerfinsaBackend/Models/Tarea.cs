namespace SerfinsaBackend.Models
{
    public class Tarea
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string? Descripcion { get; set; }
        public Prioridad Prioridad { get; set; } = Prioridad.Media;
        public bool Completada { get; set; } = false;
        public DateTime FechaCreacion { get; set; } = DateTime.UtcNow;
    }

        public enum Prioridad
        {
            Baja,
            Media,
            Alta
        }
      
        
    }

