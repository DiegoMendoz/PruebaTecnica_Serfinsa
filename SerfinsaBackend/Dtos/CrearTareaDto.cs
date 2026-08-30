using SerfinsaBackend.Models;
using System.ComponentModel.DataAnnotations;

namespace SerfinsaBackend.Dtos
{
    public class CrearTareaDto
    {
        [Required(ErrorMessage = "El título es obligatorio.")]
        [StringLength(150, ErrorMessage = "El título no puede superar 150 caracteres.")]
        public string Titulo { get; set; } = string.Empty;

        [StringLength(1000)]
        public string? Descripcion { get; set; }

        [Required]
        public Prioridad Prioridad { get; set; } = Prioridad.Media;
    }
}
