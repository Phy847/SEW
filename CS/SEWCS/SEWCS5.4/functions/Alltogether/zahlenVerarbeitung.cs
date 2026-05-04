namespace SEWCS5._4.fun.Alltogether;

public class zahlenVerarbeitung
{
    public static void PrintArray(int[] numbers)
    {
        Console.Write("[");
        
        for (int i = 0; i < numbers.Length; i++)
        {
            Console.Write(numbers[i]);
            
            if (i != numbers.Length - 1)
            {
                Console.Write(", ");
            }
        }
        
        Console.Write("]");
    }
    
    static int CalcSum(int[] numbers)
    {
        int total = 0;

        foreach (int number in numbers)
        {
            total += number;
        }
        
        return total;
    }

    static int CountEven(int[] numbers)
    {
        int count = 0;

        foreach (int number in numbers)
        {
            if (number % 2 == 0)
            {
                count++;
            }
        }

        return count;
    }

    static int FindMax(int[] numbers)
    {
        return (numbers.Max());
    }

    public static void zahlenverarbeitung(int[] numbers)
    {
        Console.WriteLine("1: PrintArray; 2: Calc sum; 3: Count even numbers; 4: Find Max");
        int input = int.Parse(Console.ReadLine());

        switch (input)
        {
            case 1: PrintArray(numbers); break;
            case 2: Console.WriteLine(CalcSum(numbers)); break;
            case 3: Console.WriteLine(CountEven(numbers)); break;
            case 4: Console.WriteLine(FindMax(numbers)); break;
        }
    }
}