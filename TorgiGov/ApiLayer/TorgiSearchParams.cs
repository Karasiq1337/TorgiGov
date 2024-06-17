using TorgiGov.DataLayer.Types;

namespace TorgiGov.DataLayer.ApiLayer;

public class TorgiSearchParams(PropertyType[]? propertyType, PropertyForm[]? propertyForm, TorgiState[]? torgiState)
{
    public PropertyType[] PropertyType { get; set; } = propertyType ?? Array.Empty<PropertyType>();
    public PropertyForm[] PropertyForm { get; set; } = propertyForm ?? Array.Empty<PropertyForm>();
    public TorgiState[] TorgiState { get; set; } = torgiState ?? Array.Empty<TorgiState>();
}