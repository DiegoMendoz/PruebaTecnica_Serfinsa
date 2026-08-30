using SerfinsaBackend.Dtos;

namespace SerfinsaBackend.Services
{
    public interface ItareaService
    {
        Task<IEnumerable<TareaDto>> ListarAsync(string estado);
        Task<TareaDto?> ObtenerPorIdAsync(int id);
        Task<TareaDto> CrearAsync(CrearTareaDto dto);
        Task<TareaDto?> ActualizarAsync(int id, ActualizarTareaDto dto);
        Task<TareaDto?> CambiarEstadoAsync(int id);
        Task<bool> EliminarAsync(int id);
    }
}
