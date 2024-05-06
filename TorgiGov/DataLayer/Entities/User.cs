namespace TorgiGov.DataLayer.Entities;

public class User(Guid id, string login, string password) : IEntity
{
    public User(string login, string password) : this(new Guid(), login, password)
    {
    }

    public Guid Id { get; set; } = id;

    public string Login { get; set; } = login;

    public string Password { get; set; } = password;
}