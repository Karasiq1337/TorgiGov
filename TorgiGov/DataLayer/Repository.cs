using Microsoft.EntityFrameworkCore;

namespace TorgiGov.DataLayer;

public interface IRepository<T> where T : class, IIdentityField
{
    public void Create(T entity);
    
    public T? Get(T entity);

    public T? GetById(Guid id);

    public void Delete(T entity);

    public void DeleteById(Guid id);
}


public class Repository<T>(DbContext dbContext) : IRepository<T>
    where T : class, IIdentityField
{
    public void Create(T entity)
    {
        dbContext.Set<T>().Add(entity);
    }

    public T? Get(T entity)
    {
        return dbContext.Set<T>().Find(entity);
    }

    public T? GetById(Guid id)
    {
        return dbContext.Set<T>().FirstOrDefault(e => e.Id == id);
    }

    public void Delete(T entity)
    {
        dbContext.Set<T>().Remove(entity);
    }

    public void DeleteById(Guid id)
    {
        var entity = GetById(id);

        if (entity != null)
        {
            dbContext.Set<T>().Remove(entity);
        }
    }
}

