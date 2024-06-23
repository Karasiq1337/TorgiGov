using Microsoft.EntityFrameworkCore;
using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.ApiLayer;

namespace TorgiGov.CommandHandlers;

public interface IUserCommandHandler
{
    public Task CreateUserAsync(UserDto userDto);
    public bool TryFindByLogin(string login);
    public Task<bool> TryLogin(UserDto userDto);
}

public class UserCommandHandler(DataContext dataContext) : IUserCommandHandler
{
    private readonly DataContext _dataContext = dataContext;

    public async Task CreateUserAsync(UserDto userDto)
    {
        await _dataContext.UsersRepository.AddAsync(userDto.MapToEntity());
        await _dataContext.SaveChangesAsync();
    }

    public bool TryFindByLogin(string login)
    {
        var result = _dataContext.UsersRepository.FirstOrDefault(u => u.Login.Equals(login));
        return result is not null;
    }

    public async Task<bool> TryLogin(UserDto userDto)
    {
        var dbUser = await _dataContext.UsersRepository
            .Where(user => user.Login == userDto.Login)
            .FirstOrDefaultAsync();
        if (dbUser == null)
            return false;
        var password = userDto.MapToEntity().Password;
        if (password.SequenceEqual(dbUser.Password))
            return true;
        return false;
    }
}