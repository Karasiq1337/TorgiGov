using System.ComponentModel.DataAnnotations;

namespace TorgiGov.DataLayer.Entities;

public class Favorites(Guid userId, Guid lotId, Guid id = new()) : IEntity
{
    public Guid UserId { get; set; } = userId;
    public Guid LotId { get; set; } = lotId;
    public Guid Id { get; set; } = id;
}