using Microsoft.AspNetCore.Mvc;
using TorgiGov.CommandHandlers;
using TorgiGov.DataLayer.ApiLayer;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.Controllers;

[ApiController]
[Route("[controller]")]
public class FavoritesController(IFavoritesCommandHandler commandHandler) : ControllerBase
{
    private readonly IFavoritesCommandHandler _commandHandler = commandHandler;

    [HttpPost("add")]
    public async Task<IActionResult> AddFavorite([FromBody] FavoriteRequest request)
    {
        try
        {
           await _commandHandler.Add(request.userLogin, request.lotId);
        }
        catch
        {
            return BadRequest();
        }
        return Ok();
    }
    
    [HttpPost("delete")]
    public async Task<IActionResult> DeleteFavorite([FromBody] FavoriteRequest request)
    {
        try
        {
            await _commandHandler.Delete(request.userLogin, request.lotId);
        }
        catch
        {
            return BadRequest();
        }
        return Ok();
    }
    
    [HttpPost("get")]
    public async Task<Torgi[]> DeleteFavorite([FromBody] LoginRequest request)
    {
        return await _commandHandler.GetByUserLogin(request.Login);
    } 
}