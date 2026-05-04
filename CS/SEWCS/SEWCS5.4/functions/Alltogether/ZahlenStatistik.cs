namespace SEWCS5._4.functions.Alltogether;

public class ZahlenStatistik
{
    static int[] ranArray()
    {
        int[] ranArray = new int[10];
        
        Random random = new Random();

        for (int i = 0; i < ranArray.Length; i++)
        {
            ranArray[i] = random.Next(1, 101);
        }
        
        return ranArray;
    }

    static double avg(int[] arr)
    {
        double count = 0;

        foreach (int number in arr)
        {
            count += number;
        }

        return count / arr.Length;
    }

    static int min(int[] arr)
    {
        int min = arr[0];

        foreach (int number in arr)
        {
            if (number < min)
            {
                min = number;
            }
        }
        
        return min;
    }

    static int max(int[] arr)
    {
        int max = arr[0];

        foreach (int number in arr)
        {
            if (number > max)
            {
                max = number;
            }
        }

        return max;
    }

    static int range1(int[] arr)
    {
        int range1 = 0;
        
        foreach (int number in arr)
        {
            if (number >= 1 && number <= 25)
            {
                range1++;
            }
        }
        
        return range1;
    }
    
    static int range2(int[] arr)
    {
        int range2 = 0;
        
        foreach (int number in arr)
        {
            if (number >= 26 && number <= 50)
            {
                range2++;
            }
        }
        
        return range2;
    }
    
    static int range3(int[] arr)
    {
        int range3 = 0;
        
        foreach (int number in arr)
        {
            if (number >= 51 && number <= 75)
            {
                range3++;
            }
        }
        
        return range3;
    }
    
    static int range4(int[] arr)
    {
        int range4 = 0;
        
        foreach (int number in arr)
        {
            if (number >= 76 && number <= 100)
            {
                range4++;
            }
        }
        
        return range4;
    }

    public static void zahlenStatistik()
    {
        int[] ranArray = ZahlenStatistik.ranArray();

        foreach (int number in ranArray)
        {
            Console.WriteLine(number);
        }
        Console.WriteLine();
        Console.WriteLine(avg(ranArray));
        Console.WriteLine();
        Console.WriteLine(min(ranArray));
        Console.WriteLine(max(ranArray));
        Console.WriteLine();
        Console.WriteLine(range1(ranArray));
        Console.WriteLine(range2(ranArray));
        Console.WriteLine(range3(ranArray));
        Console.WriteLine(range4(ranArray));
    }
}