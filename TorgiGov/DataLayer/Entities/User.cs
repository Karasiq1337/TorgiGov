namespace TorgiGov.DataLayer.Entities;

public class User : IIdentityField
{
    public Guid Id { get; set; }

    public string Login { get; set; }
    
    public string Password { get; set; }
}