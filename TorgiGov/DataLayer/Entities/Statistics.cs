using System.ComponentModel.DataAnnotations.Schema;

namespace TorgiGov.DataLayer.Entities;

[Table("Stats")]
public class DbStats : IEntity
{
    
    public Guid Id { get; set; }
    public int[] TorgiType { get; set; }
    public int[] PropertyForm { get; set; }
    public int[] PropertyType { get; set; }
}