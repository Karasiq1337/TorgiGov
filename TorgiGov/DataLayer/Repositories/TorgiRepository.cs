using Microsoft.EntityFrameworkCore;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.DataLayer.Repositories;

public class TorgiRepository(DbContext dbContext) : Repository<Torgi>(dbContext)
{
    
}