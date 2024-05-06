using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.ApiLayer;

namespace TorgiGov.CommandHandlers;

public interface IUserCommandHandler
{
    public Task CreateUserAsync(UserDto userDto);
    public bool TryFindByLogin(string login);
}

public class UserCommandHandler(DataContext dataContext) : IUserCommandHandler
{
    private readonly DataContext _dataContext = dataContext;

    public async Task CreateUserAsync(UserDto userDto)
    {
        await _dataContext.UsersRepository.CreateAsync(userDto.MapToEntity());
        _dataContext.UsersRepository.SaveChanges();
    }

    public bool TryFindByLogin(string login)
    {
        var result = _dataContext.UsersRepository.GetByLogin(login);
        return result is not null;
    }
}