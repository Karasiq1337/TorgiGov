using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer;
using TorgiGov.DataLayer.Entities;
using TorgiGov.DataLayer.Repositories;

namespace TorgiGov.ApplicationContext;

public sealed class DataContext : DbContext
{
    public readonly UsersRepository UsersRepository;
    public readonly TorgiRepository TorgiRepository;
    
    public DataContext(DbContextOptions<DataContext> options)
        :base(options)
    {
        Database.EnsureCreated();

        UsersRepository = new UsersRepository(this);
        TorgiRepository = new TorgiRepository(this);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>();
        modelBuilder.Entity<Torgi>();
    }
}