namespace TorgiGov.Configs;

public readonly struct DatabaseConfig(string user, string password, int port, string database, string host)
{
    public readonly string User = user;

    public readonly string Password = password;

    public readonly int Port = port;

    public readonly string Database = database;

    public readonly string Host = host;
}