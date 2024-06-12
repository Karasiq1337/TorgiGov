﻿using Microsoft.AspNetCore.Mvc;
using TorgiGov.CommandHandlers;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.Controllers;


[ApiController]
[Route("[controller]")]
public class TorgiController : ControllerBase
{
    private readonly ITorgiCommandHandler _commandHandler;

    public TorgiController(ITorgiCommandHandler commandHandler)
    {
        _commandHandler = commandHandler;
    }

    [HttpGet]
    public async Task<Torgi?> Get(Guid id)
    {
        return await _commandHandler.GetBtId(id);
    }
}