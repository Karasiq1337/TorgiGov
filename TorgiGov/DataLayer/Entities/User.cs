namespace TorgiGov.DataLayer.Entities;

public class User : IIdentityField
{
    public User(string login, string password)
    {
        Id = new Guid();
        Login = login;
        Password = password;
    }
    
    public Guid Id { get; set; }

    public string Login { get; set; }
    
    public string Password { get; set; }
}