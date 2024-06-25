using TorgiGov.ApplicationContext;
using TorgiGov.DataLayer.Entities;
using TorgiGov.DataLayer.Types;

namespace TorgiGov.BackendLayer;

public class Stats(DataContext dataContext, int[] torgiTypes, int[] propertyForms, int[] propertyTypes)
{
    private Dictionary<TorgiType, int> TorgiTypes { get;} = SetTorgiType(torgiTypes);
    private Dictionary<PropertyForm, int> PropertyForms { get; } = SetPropertyForm(propertyForms);
    public Dictionary<PropertyType, int> PropertyTypes { get; } = SetPropertyType(propertyTypes);

    private DataContext _dataContext = dataContext;

    public void Increment(Torgi torgi)
    {
        if (torgi.TorgiType != null) TorgiTypes[torgi.TorgiType.ToTorgiType()]++;
        if (torgi.PropertyForm != null) PropertyForms[torgi.PropertyForm.ToPropertyForm()]++;
        if (torgi.PropertyType != null) PropertyTypes[torgi.PropertyType.ToPropertyType()]++;
    }

    public Dictionary<string, int> GetStats()
    {
        var res = new Dictionary<string, int>();
        foreach (var t in TorgiTypes.Keys)
        {
            res[t.ToString()] = TorgiTypes[t];
        }

        foreach (var f in PropertyForms.Keys)
        {
            res[f.ToString()] = PropertyForms[f];
        }

        foreach (var t in PropertyTypes.Keys)
        {
            res[t.ToString()] = PropertyTypes[t];
        }
        
        return res;
    }

    public DbStats ToDbStats(Guid id)
    {
        return new DbStats
        {
            Id = id,
            PropertyForm = GetPropertyForm(),
            PropertyType = GetPropertyType(),
            TorgiType = GetTorgiType()
        };
    }

    private int[] GetTorgiType()
    {
        var res = new int[2];
        res[0] = TorgiTypes[TorgiType.Rent];
        res[1] = TorgiTypes[TorgiType.Selling];
        return res;
    }
    
    private static Dictionary<TorgiType, int> SetTorgiType(int[] arr)
    {
        var dict = new Dictionary<TorgiType, int>
        {
            [TorgiType.Rent] = arr[0],
            [TorgiType.Selling] = arr[1]
        };
        return dict;
    }
    
    private static Dictionary<PropertyType, int> SetPropertyType(int[] arr)
    {
        var dict = new Dictionary<PropertyType, int>
        {
            [PropertyType.AgriculturalLand] = arr[0],
            [PropertyType.SettlementsLands] = arr[1]
        };
        return dict;
    }
    
    private static Dictionary<PropertyForm, int> SetPropertyForm(int[] arr)
    {
        var dict = new Dictionary<PropertyForm, int>
        {
            [PropertyForm.Gos] = arr[0],
            [PropertyForm.Urban] = arr[1],
            [PropertyForm.RFSubject] = arr[2],
        };
        return dict;
    }
    
    private int[] GetPropertyType()
    {
        var res = new int[2];
        res[0] = PropertyTypes[PropertyType.AgriculturalLand];
        res[1] = PropertyTypes[PropertyType.SettlementsLands];
        return res;
    }
    
    private int[] GetPropertyForm()
    {
        var res = new int[3];
        res[0] = PropertyForms[PropertyForm.Gos];
        res[1] = PropertyForms[PropertyForm.Urban];
        res[3] = PropertyForms[PropertyForm.RFSubject];
        return res;
    }
    
    
}