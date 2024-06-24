using Microsoft.EntityFrameworkCore;
using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.CommandHandlers;

public interface IFavoritesCommandHandler
{
    public Task Add(string userLogin, Guid lotId);
    public Task Delete(string userLogin, Guid lotId);
    public Task<Torgi[]> GetByUserLogin(string userLogin);
}

public class FavoritesCommandHandler(DataContext dataContext) : IFavoritesCommandHandler
{
    private readonly DataContext _dataContext = dataContext;

    public async Task Add(string userLogin, Guid lotId)
    {
        var user = await _dataContext.UsersRepository.Where(user => user.Login == userLogin).FirstOrDefaultAsync();
        if (user == null)
            throw new ArgumentException("wrong user id");
        var favorite = new Favorites(user.Id, lotId);
        _dataContext.FavoritesRepository.Add(favorite);
        await _dataContext.SaveChangesAsync();
    }

    public async Task Delete(string userLogin, Guid lotId)
    {
        var user = await _dataContext.UsersRepository.Where(user => user.Login == userLogin).FirstOrDefaultAsync();
        if (user == null)
            throw new ArgumentException("wrong user id");
        await _dataContext.FavoritesRepository.Where(f => f.UserId == user.Id && f.LotId == lotId)
            .ExecuteDeleteAsync();
        await _dataContext.SaveChangesAsync();
    }

    public async Task<Torgi[]> GetByUserLogin(string userLogin)
    {
        var user = await _dataContext.UsersRepository
            .Where(user => user.Login == userLogin).FirstOrDefaultAsync();
        if (user == null)
            throw new ArgumentException("wrong user id");
        var favorites = await _dataContext.FavoritesRepository
            .Where(f => f.UserId == user.Id)
            .ToArrayAsync();
        var favoritesIds = favorites.Select(f => f.LotId).ToHashSet();
        var result = await _dataContext.TorgiRepository
            .Where(t => favoritesIds.Contains(t.Id))
            .ToArrayAsync();

        return result;
    }
}