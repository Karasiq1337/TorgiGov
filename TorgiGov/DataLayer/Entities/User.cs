namespace TorgiGov.DataLayer.Entities;

public class User(Guid id, string login, byte[] password) : IEntity
{
    public User(string login, byte[] password) : this(new Guid(), login, password)
    {
    }

    public Guid Id { get; set; } = id;

    public string Login { get; set; } = login;

    public byte[] Password { get; set; } = password;
}