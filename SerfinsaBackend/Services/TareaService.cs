using Microsoft.EntityFrameworkCore;
using SerfinsaBackend.Data;
using SerfinsaBackend.Dtos;
using SerfinsaBackend.Models;

namespace SerfinsaBackend.Services;

public class TareaService : ItareaService
{
    private readonly AppDbContext _db;

    public TareaService(AppDbContext db) => _db = db;

    public async Task<IEnumerable<TareaDto>> ListarAsync(string estado)
    {
        var query = _db.Tareas.AsQueryable();

        estado = (estado ?? "todas").ToLower();
        if (estado == "completadas") query = query.Where(t => t.Completada);
        else if (estado == "pendientes") query = query.Where(t => !t.Completada);

        var tareas = await query
            .OrderByDescending(t => t.FechaCreacion)
            .ToListAsync();

        return tareas.Select(MapToDto);
    }

    public async Task<TareaDto?> ObtenerPorIdAsync(int id)
    {
        var tarea = await _db.Tareas.FindAsync(id);
        return tarea is null ? null : MapToDto(tarea);
    }

    public async Task<TareaDto> CrearAsync(CrearTareaDto dto)
    {
        var tarea = new Tarea
        {
            Titulo = dto.Titulo.Trim(),
            Descripcion = dto.Descripcion,
            Prioridad = dto.Prioridad,
            Completada = false,
            FechaCreacion = DateTime.UtcNow
        };

        _db.Tareas.Add(tarea);
        await _db.SaveChangesAsync();
        return MapToDto(tarea);
    }

    public async Task<TareaDto?> ActualizarAsync(int id, ActualizarTareaDto dto)
    {
        var tarea = await _db.Tareas.FindAsync(id);
        if (tarea is null) return null;

        tarea.Titulo = dto.Titulo.Trim();
        tarea.Descripcion = dto.Descripcion;
        tarea.Prioridad = dto.Prioridad;
        tarea.Completada = dto.Completada;

        await _db.SaveChangesAsync();
        return MapToDto(tarea);
    }

    public async Task<TareaDto?> CambiarEstadoAsync(int id)
    {
        var tarea = await _db.Tareas.FindAsync(id);
        if (tarea is null) return null;

        tarea.Completada = !tarea.Completada;
        await _db.SaveChangesAsync();
        return MapToDto(tarea);
    }

    public async Task<bool> EliminarAsync(int id)
    {
        var tarea = await _db.Tareas.FindAsync(id);
        if (tarea is null) return false;

        _db.Tareas.Remove(tarea);
        await _db.SaveChangesAsync();
        return true;
    }

    private static TareaDto MapToDto(Tarea t) => new()
    {
        Id = t.Id,
        Titulo = t.Titulo,
        Descripcion = t.Descripcion,
        Prioridad = t.Prioridad,
        Completada = t.Completada,
        FechaCreacion = t.FechaCreacion
    };
}