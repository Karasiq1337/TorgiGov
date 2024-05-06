using TorgiGov.ApplicationLayer;

var app = ApplicationStartup.ConfigureApplication();

app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = "api";
});
app.MapSwagger();

app.Map("/index.html", () => "Hello");
app.Run();