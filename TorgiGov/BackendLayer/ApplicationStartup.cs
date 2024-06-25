using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using TorgiGov.ApplicationContext;
using TorgiGov.CommandHandlers;
using TorgiGov.Configs;
using TorgiGov.Controllers;

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
        _builder.Services.AddSingleton<IFavoritesCommandHandler, FavoritesCommandHandler>();
        _builder.Services.AddSingleton<IStatsCommandHandler, StatsCommandHandler>();
    }

    private static void CreateWebApplication()
    {
        _builder.Services.AddControllers().AddJsonOptions(o =>
        {
            o.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        });
        _builder.Services.AddEndpointsApiExplorer();
        _builder.Services.AddSwaggerGen();
        _builder.Services.AddMemoryCache();
        _builder.Services.AddLogging();

        _builder.Services.AddCors();
        _builder.Services.AddMvc((options => options.EnableEndpointRouting = false));
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