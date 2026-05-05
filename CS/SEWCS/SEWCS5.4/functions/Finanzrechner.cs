namespace SEWCS5._4.functions;

public class Finanzrechner
{
    //factor = 1 + rate / 100; capital *= factor;

    static decimal ReadDecimal(string prompt)
    {
        Console.WriteLine(prompt);
        decimal value = decimal.Parse(Console.ReadLine());
        
        return value;
    }
    
    static int ReadInt(string prompt)
    {
        Console.WriteLine(prompt);
        int value = int.Parse(Console.ReadLine());
        
        return value;
    }

    static decimal CalculateInterest(decimal capital, decimal rate, int years)
    {
        decimal factor = 1 + rate / 100;

        for (int i = 0; i < years; i++)
        {
            capital *= factor;
        }
        
        return Math.Round(capital, 2);
    }

    static void PrintResult(decimal result)
    {
        Console.WriteLine(result);
    }

    public static void Main()
    {
        decimal capital = ReadDecimal("Start capital: ");
        decimal rate = ReadDecimal("Interest rate: ");
        int years = ReadInt("Years: ");
        
        decimal result = CalculateInterest(capital, rate, years);

        PrintResult(result);
    }
}