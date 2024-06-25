using Microsoft.AspNetCore.Mvc;
using TorgiGov.ApiLayer;
using TorgiGov.CommandHandlers;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.Controllers;

[ApiController]
[Route("[controller]")]
public class StatsController(IStatsCommandHandler statsCommandHandler) : ControllerBase
{
    private readonly IStatsCommandHandler _statsCommandHandler = statsCommandHandler;

    [HttpPost("increment")]
    public async Task Increment([FromQuery] Guid torgiId)
    {
        await _statsCommandHandler.IncrementByTorgiId(torgiId);
    }

    [HttpGet("get")]
    public Dictionary<string, int> Get()
    {
        return _statsCommandHandler.GetStats();
    }
}