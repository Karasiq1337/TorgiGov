using Microsoft.EntityFrameworkCore;
using Npgsql;
using TorgiGov.ApplicationContext;
using TorgiGov.CommandHandlers;
using TorgiGov.Configs;
using TorgiGov.DataLayer;

namespace TorgiGov.ApplicationLayer;

public static class ApplicationStartup
{
    private static IConfiguration _configuration;
    private static IServiceProvider _serviceProvider;
    private static WebApplication _application;
    private static DataContext _dataContext;

    private static WebApplicationBuilder _builder;
    
    public static WebApplication ConfigureApplication()
    {
        _builder = WebApplication.CreateBuilder();
        BuildConfig();
        BuildDataContext();
        AddDI();
        CreateWebApplication();

        
        return _application;
    }

    private static void AddDI()
    {
        _builder.Services.AddSingleton<IUserCommandHandler, UserCommandHandler>();
        _builder.Services.AddSingleton<ITorgiCommandHandler, TorgiCommandHandler>();
    }

    private static void CreateWebApplication()
    {
        _builder.Services.AddControllersWithViews();
        _builder.Services.AddControllers();
        _builder.Services.AddEndpointsApiExplorer();
        _builder.Services.AddSwaggerGen();
        _builder.Services.AddMemoryCache();
        
        _application =  _builder.Build();
    }

    private static void BuildConfig()
    {
        var builder = new ConfigurationBuilder()
            .AddJsonFile($"appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{_builder.Environment.EnvironmentName}.json", optional: false,
                reloadOnChange: true)
            .AddUserSecrets<Program>();
        
        _configuration = builder.Build();
        _builder.Services.AddSingleton(_configuration);
    }

    private static void BuildDataContext()
    {
        var config = _configuration.GetSection(GlobalConstants.PostgresDatabaseConfig);
        var postgresConfig = new DatabaseConfig(
                user: config["ConnectionString:User"],
                password: config["ConnectionString:Password"],
                port: int.Parse(config["ConnectionString:Port"]),
                database: config["ConnectionString:Database"],
                host: config["ConnectionString:Host"]);
        
        var connectionStringBuilder = new NpgsqlConnectionStringBuilder();
        connectionStringBuilder.UseDatabaseConfig(postgresConfig);
        
        var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
        optionsBuilder.UseNpgsql(connectionStringBuilder.ToString());
        
        _dataContext = new DataContext(optionsBuilder.Options);
        _builder.Services.AddSingleton(_dataContext);
    }
}