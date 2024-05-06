using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer;
using TorgiGov.DataLayer.Entities;
using TorgiGov.DataLayer.Repositories;

namespace TorgiGov.ApplicationContext;

public sealed class DataContext : DbContext
{
    public UsersRepository UsersRepository;
    
    public DataContext(DbContextOptions<DataContext> options)
        :base(options)
    {
        Database.EnsureCreated();

        UsersRepository = new UsersRepository(this);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>();
    }
}