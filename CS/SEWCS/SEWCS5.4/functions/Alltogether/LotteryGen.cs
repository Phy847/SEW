namespace SEWCS5._4.fun.Alltogether;
using zahlenVerarbeitung;

public class LotteryGen
{
    static int[] RandomNumbers()
    {
        Random random = new Random();
        
        int[] numbers = new int[6];

        for (int i = 0; i < numbers.Length; i++)
        {
            int number = random.Next(1, 46);
            
            bool isIncluded = false;

            for (int j = 0; j < i; j++)
            {
                if (numbers[j] == number)
                {
                    isIncluded = true;
                    break;
                }
            }

            if (isIncluded)
            {
                i--;
            }
            else
            {
                numbers[i] = number;
            }
        }

        Array.Sort(numbers);
        return numbers;
    }

    static int SumOfNumbers(int[] numbers)
    {
        int sum = 0;

        foreach (int number in numbers)
        {
            sum += number;
        }
        
        return sum;
    }

    static int CountEvenLot(int[] numbers)
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
    
    //main func Nr. 5:
    
    public static void LotteryGenerator()
    {
        int[] lotNumbers = RandomNumbers();
        
        zahlenVerarbeitung.PrintArray(lotNumbers);
        Console.WriteLine();
        Console.WriteLine($"Sum of numbers: {SumOfNumbers(lotNumbers)}");
        Console.WriteLine();
        Console.WriteLine($"highest number: {lotNumbers.Max()}, lowest number: {lotNumbers.Min()}");
        Console.WriteLine();
        Console.WriteLine($"number of even numbers: {CountEvenLot(lotNumbers)}, count of uneven numbers: {6 -  CountEvenLot(lotNumbers)}");
    }
}