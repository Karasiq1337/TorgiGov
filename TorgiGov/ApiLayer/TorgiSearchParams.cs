﻿using TorgiGov.DataLayer.Types;

namespace TorgiGov.DataLayer.ApiLayer;

public class TorgiSearchParams(string[]? propertyType, string[]? propertyForm, string[]? torgiState, string[]? torgiType)
{
    public string[] PropertyType { get; set; } = propertyType ?? Array.Empty<string>();
    public string[] PropertyForm { get; set; } = propertyForm ?? Array.Empty<string>();
    public string[] TorgiState { get; set; } = torgiState ?? Array.Empty<string>();

    public string[] TorgiType { get; set; } = torgiType ?? Array.Empty<string>();
}