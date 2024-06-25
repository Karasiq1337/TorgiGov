using TorgiGov.ApplicationContext;
using TorgiGov.BackendLayer;

namespace TorgiGov.CommandHandlers;

public interface IStatsCommandHandler
{
    Task IncrementByTorgiId(Guid torgiId);
    public Dictionary<string, int> GetStats();
}

public class StatsCommandHandler : IStatsCommandHandler, IDisposable, IAsyncDisposable
{
    private readonly DataContext _dataContext;
    private readonly Stats _stats;
    private readonly Guid _statId;

    public StatsCommandHandler(DataContext dataContext)
    {
        _dataContext = dataContext;
        var dbStats = _dataContext.StatsRepository.First();
        _statId = dbStats.Id;
        _stats = new Stats(_dataContext, dbStats.TorgiType, dbStats.PropertyForm, dbStats.PropertyType);
    }

    public async Task IncrementByTorgiId(Guid torgiId)
    {
        var torgi = await _dataContext.TorgiRepository.FindAsync(torgiId);
        if (torgi != null) _stats.Increment(torgi);
    }

    public Dictionary<string, int> GetStats()
        => _stats.GetStats();

    public void Dispose()
    {
        using (_dataContext)
        {
            var dbStats = _stats.ToDbStats(_statId);
            _dataContext.StatsRepository.Update(dbStats);
            _dataContext.SaveChanges();
        }
        _dataContext.Dispose();
    }

    public async ValueTask DisposeAsync()
    {
        await using (_dataContext)
        {
            var dbStats = _stats.ToDbStats(_statId);
            _dataContext.StatsRepository.Update(dbStats);
            await _dataContext.SaveChangesAsync();
        }
        await _dataContext.DisposeAsync();
    }
}