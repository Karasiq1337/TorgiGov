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
        await _dataContext.UsersRepository.AddAsync(userDto.MapToEntity());
        await _dataContext.SaveChangesAsync();
    }

    public bool TryFindByLogin(string login)
    {
        var result = _dataContext.UsersRepository.FirstOrDefault(u => u.Login.Equals(login));
        return result is not null;
    }
}