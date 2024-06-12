using System.ComponentModel.DataAnnotations.Schema;
using TorgiGov.DataLayer.Types;

namespace TorgiGov.DataLayer.Entities;

public class Torgi : IEntity
{
    public Guid Id { get; set; }

    public TorgiType Type { get; set; }

    public string? Platform { get; set; }
    
    public string? Izveshenie { get; set; }
    
    public TorgiState State { get; set; }

    public string? Link { get; set; }
    
    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string? RFSubject { get; set; }
    
    public string? Address { get; set; }
    
    [Column(TypeName="money")]
    public int Deposit { get; set; }

    [Column(TypeName="money")]
    public int AuctionStep { get; set; }

    [Column(TypeName="money")]
    public int StartCost { get; set; }

    public PropertyType PropertyType { get; set; }

    public float Area { get; set; }

}
