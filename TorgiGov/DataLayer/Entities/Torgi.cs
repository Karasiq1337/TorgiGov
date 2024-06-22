using System.ComponentModel.DataAnnotations.Schema;
using TorgiGov.DataLayer.Types;

namespace TorgiGov.DataLayer.Entities;

public class Torgi : IEntity
{
    public Guid Id { get; set; }

    public string? Platform { get; set; }

    public string? Link { get; set; }
    
    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string? RFSubject { get; set; }
    
    public string? Address { get; set; }
    
    public int? Deposit { get; set; }
    
    public int? AuctionStep { get; set; }
    
    public int? StartCost { get; set; }
    public string? State { get; set; }

    public string? PropertyType { get; set; }

    public float? Area { get; set; }
    
    public string? PropertyForm { get; set; }

    public string? Vid { get; set; }
    public string? TorgiType { get; set; }
}
