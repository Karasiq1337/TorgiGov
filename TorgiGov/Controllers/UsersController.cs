﻿using Microsoft.AspNetCore.Mvc;
using TorgiGov.CommandHandlers;
using TorgiGov.DataLayer.ApiLayer;

namespace TorgiGov.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController(IUserCommandHandler userCommandHandler) : ControllerBase
{
    private readonly IUserCommandHandler _userCommandHandler = userCommandHandler;
    
    [HttpPut]
    [Route("/[controller]/create/")]
    public async Task<IActionResult> CreateUser(UserDto userDto)
    {
       if (_userCommandHandler.TryFindByLogin(userDto.Login))
            return BadRequest("User with this login already exists");
       
       await _userCommandHandler.CreateUserAsync(userDto);
       return Ok();
    }

    [HttpGet]
    [Route("/[controller]/checkLogin")]
    public bool UserWithLoginExists(string login)
    {
        return _userCommandHandler.TryFindByLogin(login);
    }
}