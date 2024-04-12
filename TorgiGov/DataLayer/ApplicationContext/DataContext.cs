using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.DataLayer.ApplicationContext;

public interface IDataContext
{
    
}

public class DataContext : DbContext
{
    private readonly IConfiguration Configuration;
    public IRepository<User> UsersRepository;
    
    public DataContext(DbContextOptions<DataContext> options)
        :base(options)
    {
        Database.EnsureCreated();

        UsersRepository = new Repository<User>(this);
    }
}