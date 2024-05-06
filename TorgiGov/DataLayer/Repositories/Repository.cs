using Microsoft.EntityFrameworkCore;
using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.DataLayer.Repositories;

public interface IRepository<T> where T : class, IEntity
{
    public void Create(T entity);

    public Task CreateAsync(T entity);

    public T? GetById(Guid id);

    public Task<T?> GetByIdAsync(Guid id);

    public void Delete(T entity);

    public void DeleteById(Guid id);

    public void SaveChanges();
}


public class Repository<T>(DbContext dbContext) : IRepository<T>
    where T : class, IEntity
{
    protected readonly DbSet<T> Entities = dbContext.Set<T>();
    public void Create(T entity)
    {
        Entities.Add(entity);
    }

    public async Task CreateAsync(T entity)
    {
        await Entities.AddAsync(entity).AsTask();
    }

    public T? GetById(Guid id)
    {
        return Entities.FirstOrDefault(e => e.Id == id);
    }

    public async Task<T?> GetByIdAsync(Guid id)
    {
        return await Entities.FirstOrDefaultAsync(e => e.Id == id);
    }

    public void Delete(T entity)
    {
        Entities.Remove(entity);
    }

    public void DeleteById(Guid id)
    {
        var entity = GetById(id);

        if (entity != null)
        {
            Entities.Remove(entity);
        }
    }

    public void SaveChanges()
    {
        dbContext.SaveChanges();
    }
}

