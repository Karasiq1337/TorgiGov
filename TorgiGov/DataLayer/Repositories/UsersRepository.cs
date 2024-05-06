using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.DataLayer.Repositories;

public class UsersRepository(DbContext dbContext) : Repository<User>(dbContext)
{
    public User? GetByLogin(string login)
    {
        return Entities.FirstOrDefault(u => u.Login == login.ToLower());
    }
}