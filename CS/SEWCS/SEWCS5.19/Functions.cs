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

    public static string BinaryConverter(int number)
    {
        if (number == 0) return "";
        return BinaryConverter(number / 2) + (number % 2);
    }

    public static bool Palindrom(string word)
    {
        word = word.ToLower();
        if (word.Length < 2) return true;
        if (word[0] != word[word.Length - 1]) return false;
        return Palindrom(word.Substring(1, word.Length - 2));
    }

    public static double GGT(double n1, double n2)
    {
        if (n2 == 0) return n1;
        return GGT(n1, (n2 % n1));
    }

    public static double Markiplier(int bas, int multi)
    {
        if (multi == 1) return bas;
        return bas + Markiplier(bas, multi - 1);
    }

    public static int Mark(int[] array, int index)
    {
        if (index == array.Length - 1) return array[index];
        int maxRest = Mark(array, index + 1);
        return Math.Max(array[index], maxRest);
    }
}