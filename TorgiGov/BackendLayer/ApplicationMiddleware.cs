namespace TorgiGov.ApplicationLayer;

public static class ApplicationMiddleware 
{
    public static void MountMiddleware(WebApplication application)
    {
        application.UseAuthentication();
        application.UseAuthorization();
    }
}