using System.Collections;
using System.Diagnostics;

namespace TorgiGov.DataLayer.Types;

public enum TorgiType
{
    Rent = 0,
    Selling = 1,
}

public enum TorgiState
{
    Published = 0,
    ApplicationAcceptance = 1,
}


public enum PropertyType
{
    AgriculturalLand = 0,
    SettlementsLands = 1,
}

public enum PropertyForm
{
    Gos= 0,
    RFSubject = 1,
    Urban = 2,
}

public static class StringEnumExtensions
{
    public static TorgiType ToTorgiType(this string s)
        => s switch
        {
            "Аренда" => TorgiType.Rent,
            "Продажа" => TorgiType.Selling,
            _ => throw new ArgumentException()
        };
    
    public static PropertyType ToPropertyType(this string s)
        => s switch
        {
            "Земли населенных пунктов" => PropertyType.SettlementsLands,
            "Земли сельскохозяйственного назначения" => PropertyType.AgriculturalLand,
            _ => throw new ArgumentException()
        };
    
    public static string ToString(this PropertyForm s)
        => s switch
        {
            PropertyForm.Gos => "Государственная собственность (неразграниченная)",
            PropertyForm.Urban => "Муниципальная собственность",
            PropertyForm.RFSubject => "Собственность субъектов РФ",
            _ => throw new ArgumentException()
        };
    
    public static string ToString(this TorgiType s)
        => s switch
        {
            TorgiType.Rent => "Аренда",
            TorgiType.Selling => "Продажа",
            _ => throw new ArgumentException()
        };
    
    public static string ToString(this PropertyType s)
        => s switch
        {
            PropertyType.SettlementsLands => "Земли населенных пунктов",
            PropertyType.AgriculturalLand => "Земли сельскохозяйственного назначения",
            _ => throw new ArgumentException()
        };
    
    public static PropertyForm ToPropertyForm(this string s)
        => s switch
        {
            "Государственная собственность (неразграниченная)" => PropertyForm.Gos,
            "Муниципальная собственность" => PropertyForm.Urban,
            "Собственность субъектов РФ" => PropertyForm.RFSubject,
            _ => throw new ArgumentException()
        };
}