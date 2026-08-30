using SerfinsaBackend.Models;
using System.ComponentModel.DataAnnotations;

namespace SerfinsaBackend.Dtos
{
    public class ActualizarTareaDto
    {
        [Required(ErrorMessage = "El título es obligatorio.")]
        [StringLength(150)]
        public string Titulo { get; set; } = string.Empty;

        [StringLength(1000)]
        public string? Descripcion { get; set; }

        [Required]
        public Prioridad Prioridad { get; set; }

        public bool Completada { get; set; }
    }
}
