using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer;
using TorgiGov.DataLayer.Entities;
using TorgiGov.DataLayer.Repositories;

namespace TorgiGov.ApplicationContext;

public sealed class DataContext : DbContext
{
    public readonly DbSet<User> UsersRepository;
    public readonly DbSet<Torgi> TorgiRepository;
    public readonly DbSet<Favorites> FavoritesRepository;
    
    public DataContext(DbContextOptions<DataContext> options)
        :base(options)
    {
        Database.EnsureCreated();

        UsersRepository = Set<User>();
        TorgiRepository = Set<Torgi>();
        FavoritesRepository = Set<Favorites>();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>();
        modelBuilder.Entity<Torgi>();
        modelBuilder.Entity<Favorites>();
    }
}