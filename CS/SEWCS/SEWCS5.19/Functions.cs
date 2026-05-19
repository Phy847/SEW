namespace SEWCS5._19;

public class Functions
{
    public static int Power(int a, int exp)
    {
        if (exp <= 0) return 1;
        return a * Power(a, exp - 1);
    }

    public static int EvenCount(List<int> list, int index)
    {
        if (index >= list.Count) return 0;
        int value = list[index] % 2 == 0 ? 1 : 0;
        return value + EvenCount(list, index + 1);
    }                                                  
}