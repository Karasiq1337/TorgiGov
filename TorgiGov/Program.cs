using System.Text;
using Microsoft.AspNetCore.Mvc;
using TorgiGov.ApplicationLayer;

var app = ApplicationStartup.ConfigureApplication();

app.Use(async (context, next) =>
{
    var initialBody = context.Request.Body;

    using (var bodyReader = new StreamReader(context.Request.Body))
    {
        string body = await bodyReader.ReadToEndAsync();
        Console.WriteLine(body);
        Console.WriteLine(context.Request.Method);
        Console.WriteLine(context.Request.ContentType);
        context.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(body));
        await next.Invoke();
        context.Request.Body = initialBody;
    }
});

app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = "api";
});

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());   
app.UseMvc();
app.Run();
