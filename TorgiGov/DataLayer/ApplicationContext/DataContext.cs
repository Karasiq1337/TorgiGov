using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.DataLayer.ApplicationContext;

public class DataContext : DbContext
{
    public IRepository<User> UsersRepository;
    
    public DataContext(DbContextOptions<DataContext> options)
        :base(options)
    {
        Database.EnsureCreated();
        
        var cock = Database.GenerateCreateScript();

        UsersRepository = new Repository<User>(this);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>();
    }
}