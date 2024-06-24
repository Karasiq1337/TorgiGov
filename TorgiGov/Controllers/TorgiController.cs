using Microsoft.AspNetCore.Mvc;
using TorgiGov.CommandHandlers;
using TorgiGov.DataLayer.ApiLayer;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.Controllers;


[ApiController]
[Route("[controller]")]
public class TorgiController(ITorgiCommandHandler commandHandler) : ControllerBase
{
    private readonly ITorgiCommandHandler _commandHandler = commandHandler;

    [HttpGet]
    public async Task<Torgi?> Get(Guid id)
    {
        return await _commandHandler.GetBtId(id);
    }
    
    [HttpPost("GetByParams")]
    public async Task<Torgi[]?> GetByParams([FromBody]TorgiSearchParams torgiSearchParams)
    {
        var maBalls = await _commandHandler.GetByParams(torgiSearchParams);
        return maBalls;
    }
}   