using Microsoft.AspNetCore.Mvc;
using TorgiGov.CommandHandlers;
using TorgiGov.DataLayer.ApiLayer;

namespace TorgiGov.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController(IUserCommandHandler userCommandHandler) : ControllerBase
{
    private readonly IUserCommandHandler _userCommandHandler = userCommandHandler;
    
    [HttpPost("create")]
    public async Task<IActionResult> CreateUser(UserDto userDto)
    {
       if (_userCommandHandler.TryFindByLogin(userDto.Login))
            return BadRequest("User with this login already exists");
       
       await _userCommandHandler.CreateUserAsync(userDto);
       return Ok();
    }

    [HttpPost("checkLogin")]
    public bool CheckLogin([FromBody]CheckLoginRequest request)
    {
        return _userCommandHandler.TryFindByLogin(request.Login);
    }

    [HttpPost("login")]
    public async Task<bool> Login([FromBody]UserDto userDto)
    {
        return await _userCommandHandler.TryLogin(userDto);
    }
}