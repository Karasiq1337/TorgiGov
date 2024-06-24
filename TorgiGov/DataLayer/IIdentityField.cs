using System.ComponentModel.DataAnnotations;

namespace TorgiGov.DataLayer;

public interface IIdentityField
{
    [Key]
    public Guid Id { get;  }
}