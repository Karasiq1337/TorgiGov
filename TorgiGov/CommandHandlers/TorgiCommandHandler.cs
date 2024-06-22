using Microsoft.EntityFrameworkCore;
using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.ApiLayer;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.CommandHandlers;

public interface ITorgiCommandHandler
{
    Task<Torgi?> GetBtId(Guid id);
    Task<Torgi[]> GetByParams(TorgiSearchParams searchParams);
}

public class TorgiCommandHandler : ITorgiCommandHandler
{
    private readonly DataContext _dataContext;

    public TorgiCommandHandler(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public async Task<Torgi?> GetBtId(Guid id)
    {
        return await _dataContext.TorgiRepository.FirstOrDefaultAsync(t => t.Id == id);
    }

    public async Task<Torgi[]> GetByParams(TorgiSearchParams searchParams)
    {
        return await _dataContext.TorgiRepository
            .Where(t => searchParams.TorgiType.Contains(t.TorgiType))
            .Where(t => searchParams.PropertyType.Contains(t.PropertyType))
            .Where(t => searchParams.TorgiState.Contains(t.State))
            .Where(t => searchParams.PropertyForm.Contains(t.PropertyForm))
            .ToArrayAsync();
    }
}