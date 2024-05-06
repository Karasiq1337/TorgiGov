using Npgsql;
using TorgiGov.Configs;

namespace TorgiGov;

public static class NpgsqlConnectionStringBuilderExtensions
{
    public static void UseDatabaseConfig(this NpgsqlConnectionStringBuilder builder, DatabaseConfig configObj)
    {
        builder.Username = configObj.User;
        builder.Password = configObj.Password;
        builder.Database = configObj.Database;
        builder.Host = configObj.Host;
        builder.Port = configObj.Port;
    }
}
