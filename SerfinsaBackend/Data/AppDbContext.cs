using Microsoft.EntityFrameworkCore;
using SerfinsaBackend.Models;

namespace SerfinsaBackend.Data

    
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
            { }
        public DbSet<Tarea> Tareas => Set<Tarea>();
    }
}
