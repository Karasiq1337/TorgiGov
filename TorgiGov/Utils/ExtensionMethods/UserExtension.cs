using System.Security.Cryptography;
using System.Text;
using TorgiGov.DataLayer.ApiLayer;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov;

public static class UserExtension
{
    public static UserDto MapToDto(this User user)
    {
        return new UserDto
        {
            Login = user.Login,
            Password = user.Password,
        };
    }

    public static User MapToEntity(this UserDto userDto)
    {
        var mySHA256 = SHA256.Create();
        var passwordHash = mySHA256.ComputeHash(Encoding.UTF8.GetBytes(userDto.Password)).ToString();
        return new User (userDto.Login, passwordHash)
        {
            Id = Guid.NewGuid(),
            Login = userDto.Login.ToLower(),
            Password = passwordHash,
        };
    }
}