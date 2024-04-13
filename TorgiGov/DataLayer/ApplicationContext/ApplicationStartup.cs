using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting.Internal;
using Npgsql;
using TorgiGov.Configs;
using TorgiGov.DataLayer.Entities;

namespace TorgiGov.DataLayer.ApplicationContext;

public static class ApplicationStartup
{
    private static IConfiguration _configuration;
    private static IServiceProvider _serviceProvider;
    private static WebApplication _application;
    private static DataContext _dataContext;

    private static WebApplicationBuilder _builder;
    
    public static WebApplication Go()
    {
        _builder = WebApplication.CreateBuilder();
        BuildConfig();
        BuildDataContext();
        CreateWebApplication();
        
        return _application;
    }
    
    private static void CreateWebApplication()
    {
        _builder.Services.AddControllersWithViews();
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