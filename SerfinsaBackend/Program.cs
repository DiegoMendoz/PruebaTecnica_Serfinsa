using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using SerfinsaBackend.Data;
using SerfinsaBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Controladores + enviar/recibir la Prioridad como texto ("Baja","Media","Alta")
builder.Services.AddControllers()
    .AddJsonOptions(options =>
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

builder.Services.AddOpenApi();

// Base de datos SQLite (archivo serfinsa.db)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Default")
                      ?? "Data Source=serfinsa.db"));

// Registro del servicio (inyección de dependencias) — esto resuelve tu error
builder.Services.AddScoped<ItareaService, TareaService>();

// CORS para el frontend React (Vite en http://localhost:5173)
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirFrontend", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

// Crea la base de datos y aplica migraciones al iniciar
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("PermitirFrontend");
app.MapControllers();

app.Run();