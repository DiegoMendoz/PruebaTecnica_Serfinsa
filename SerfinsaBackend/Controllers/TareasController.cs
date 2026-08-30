using Microsoft.AspNetCore.Mvc;
using SerfinsaBackend.Dtos;
using SerfinsaBackend.Services;

namespace SerfinsaBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TareasController : ControllerBase
{
    private readonly ItareaService _service;

    public TareasController(ItareaService service) => _service = service;

    // POST /api/tareas  -> registrar una tarea nueva
    [HttpPost]
    public async Task<ActionResult<TareaDto>> Crear(CrearTareaDto dto)
    {
        var tarea = await _service.CrearAsync(dto);
        return CreatedAtAction(nameof(Detalle), new { id = tarea.Id }, tarea);
    }

    // GET /api/tareas?estado=todas|pendientes|completadas
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TareaDto>>> Listar([FromQuery] string estado = "todas")
        => Ok(await _service.ListarAsync(estado));

    // GET /api/tareas/5  -> consultar el detalle de una tarea
    [HttpGet("{id:int}")]
    public async Task<ActionResult<TareaDto>> Detalle(int id)
    {
        var tarea = await _service.ObtenerPorIdAsync(id);
        return tarea is null ? NotFound() : Ok(tarea);
    }
    //nueva http request en ves de put 
    // PATCH /api/tareas/5/estado  -> alternar completada/pendiente
    [HttpPatch("{id:int}/estado")]
    public async Task<ActionResult<TareaDto>> CambiarEstado(int id)
    {
        var tarea = await _service.CambiarEstadoAsync(id);
        return tarea is null ? NotFound() : Ok(tarea);
    }

    // PUT /api/tareas/5  -> modificar cualquier dato de la tarea
    [HttpPut("{id:int}")]
    public async Task<ActionResult<TareaDto>> Actualizar(int id, ActualizarTareaDto dto)
    {
        var tarea = await _service.ActualizarAsync(id, dto);
        return tarea is null ? NotFound() : Ok(tarea);
    }
    // DELETE /api/tareas/5  → eliminar una tarea
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Eliminar(int id)
    {
        var ok = await _service.EliminarAsync(id);
        return ok ? NoContent() : NotFound();
    }





}