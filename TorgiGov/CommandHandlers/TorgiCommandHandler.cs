using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.CommandHandlers;

public interface ITorgiCommandHandler
{
    Task<Torgi?> GetBtId(Guid id);
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
        return await _dataContext.TorgiRepository.GetByIdAsync(id);
    }
}