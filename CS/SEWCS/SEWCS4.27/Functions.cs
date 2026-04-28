namespace SEWCS4._27;

public class Functions
{
    public static int[] BubbleSort(int[] numbers)
    {
        int n = numbers.Length;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (numbers[j] > numbers[j + 1])
                {
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        return numbers;
    }

    public static void WelcomeBanner(string name)
    {
        Console.WriteLine($"***{name}***");
    }

    public static void ScoreBoard(string Player, int points)
    {
        points.ToString("D4");
        Console.WriteLine($"Player: {Player} | Points: {points}");
    }

    public static int MaximumFunction(int a, int b, int c)
    {
        if (a > b && a > c)
        {
            return a;
        } else if (b > c)
        {
            return b;
        }
        else
        {
            return c;
        }
    }

    public static int BinarySearch(int[] sortedData, int target)
    {
        int low = 0;
        int high = sortedData.Length - 1;
        int mid = 0;

        while (low <= high)
        {
            mid = (low + high) / 2;

            if (target > sortedData[mid])
            {
                high = mid - 1;
            } else if (target < sortedData[mid])
            {
                low = mid + 1;
            } else if (target == sortedData[mid])
            {
                return sortedData[mid];
            }
        }

        return -1;
    }

    public static void ArrayInitializer()
    {
        int[] numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        foreach (int i in numbers)
        {
            if (i % 2 == 0)
            {
                Console.WriteLine(i);
            }
        }
    }

    public static void InventorySystem()
    {
        string[] inventory = new string[5];
        
        Console.WriteLine("Enter 5 items you want to put in your inventory: ");
        inventory[0] = Console.ReadLine();
        inventory[1] = Console.ReadLine();
        inventory[2] = Console.ReadLine();
        inventory[3] = Console.ReadLine();
        inventory[4] = Console.ReadLine();

        foreach (string i in inventory)
        {
            Console.WriteLine(i);
        }
        
        Console.WriteLine("Which item do you want to remove?: ");
        string remove = Console.ReadLine();
        
        
    }
}
