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
        string text = $"* Welcome {name} *";
        string border = new string('*', text.Length);

        Console.WriteLine(border);
        Console.WriteLine(text);
        Console.WriteLine(border);
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
        int remove = int.Parse(Console.ReadLine());
        
        inventory.SetValue("Empty", remove-1);
        foreach (string item in inventory)
        {
            Console.WriteLine(item);
        }
    }

    public static void DynamicSummer()
    {
        List<int> num = new List<int>();

        int total = 0;
        
        Console.WriteLine("Enter numbers to add (-1 to stop): ");

        int input = 0;
        while (true)
        {
            input = int.Parse(Console.ReadLine());
            
            if (input == -1)
            {
                break;
            }
            
            num.Add(input);
        }

        foreach (int i in num)
        {
            total += i;
        }
        
        Console.WriteLine(total);
    }

    public static void TheCleaner()
    {
        List<string> names = new List<string> {"Tobias", "Tobias", "Tobias", "Alex", "Gabsch"};
        
        foreach (string name in names.Distinct())
        {
            Console.WriteLine(name);
        }
    }

    public static void HighscoreList()
    {
        List<int>scores = new List<int>();

        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine("Enter Score: ");
            scores.Add(int.Parse(Console.ReadLine()));
        }
        
        scores.Sort();
        scores.Reverse();

        for (int k = 0; k < 3; k++)
        {
            Console.WriteLine(scores[k]);
        }
    }

    public static void WordFilter()
    {
        List<string> words = new List<string>();
        List<string> newWords = new List<string>();
        
        Console.WriteLine("Enter 10 words: ");

        for (int i = 0; i < 10; i++)
        {
            words.Add(Console.ReadLine());
        }

        for (int k = 0; k < words.Count; k++)
        {
            if (words[k].Length > 4)
            {
                newWords.Add(words[k]);
            }
        }
        
        Console.WriteLine("------------------------");

        foreach (string word in newWords)
        {
            Console.WriteLine(word);
        }
    }

    public static void InsertAtIndex()
    {
        List<string> words = new List<string> {"insert", "any", "word"};

        foreach (string word in words)
        {
            Console.WriteLine(word);
        }
        
        Console.WriteLine("Enter word to add: ");
        string add = Console.ReadLine();
        Console.WriteLine("Enter index of word: ");
        int index = int.Parse(Console.ReadLine());
        
        words.Insert(index, add);

        foreach (string word in words)
        {
            Console.WriteLine(word);
        }
    }

    public static void TodoManager()
    {
        List<string> todo = new List<string>();

        bool loop = true;

        while (loop)
        {
            Console.WriteLine("What would you like to do?");
            Console.WriteLine("1 Add Item");
            Console.WriteLine("2 Remove Item");
            Console.WriteLine("3 Show List");
            Console.WriteLine("4 exit");
            
            int input = int.Parse(Console.ReadLine());

            if (input == 1)
            {
                Console.WriteLine("What to add?");
                todo.Add(Console.ReadLine());
            } else if (input == 2)
            {
                Console.WriteLine("Which item to remove? (index): ");
                int index = int.Parse(Console.ReadLine());
                
                todo.RemoveAt(index);
            } else if (input == 3)
            {
                foreach (string word in todo)
                {
                    Console.WriteLine(word);
                }
            } else if (input == 4)
            {
                loop = false;
            }
        }
    }

    public static void AverageGrade()
    {
        List<int> grades = new List<int>();
        bool loop = true;
        
        Console.WriteLine("Enter Grades: (-1 to exit) ");

        while (loop)
        {
            int input = int.Parse(Console.ReadLine());

            if (input == -1)
            {
                break;
            }
            else
            {
                grades.Add(input);
            }
        }
        
        grades.Sort();
        int count = 0;
        
        foreach (int grade in grades)
        {
            count += grade;
        }
        
        int avg = count / grades.Count;
        
        Console.WriteLine($"Average Grade: {avg}");

        int one = 0;
        
        foreach (int grade in grades)
        {
            if (grade == 1)
            {
                one++;
            }
        }
        
        Console.WriteLine($"Number of A's : {one}");
        Console.WriteLine($"Worst grade: {grades[grades.Count -1]}");
    }

    public static void InventoryExpansion()
    {
        List<string> inventory = new List<string>();
        
        Console.WriteLine("Enter item(s) to add to inventory: ");

        while (true)
        {
            inventory.Add(Console.ReadLine());

            if (inventory.Count == 10)
            {
                Console.WriteLine("Inventory full!");
                break;
            }
        }
        
        Console.WriteLine("Enter item name to search for: ");
        string name = Console.ReadLine();

        if (inventory.Contains(name))
        {
            Console.WriteLine("Item is in the inventory!");
        }
        else
        {
            Console.WriteLine("Item not found!");
        }
    }

    public static void NumberSorter()
    {
        List<int> og = new List<int>();
        List<int> even = new List<int>();
        List<int> odd = new List<int>();
        
        Console.WriteLine("Enter 10 numbers: ");

        for (int i = 0; i < 10; i++)
        {
            og.Add(int.Parse(Console.ReadLine()));
        }

        foreach (int i in og)
        {
            if (i % 2 == 0)
            {
                even.Add(i);
            }
            else
            {
                odd.Add(i);
            }
        }
        
        Console.WriteLine("Even numbers: ");

        foreach (int i in even)
        {
            Console.WriteLine(i);
        }
        
        Console.WriteLine("Odd numbers: ");

        foreach (int i in odd)
        {
            Console.WriteLine(i);
        }
    }

    public static void ReverseList()
    {
        List<string> words = new List<string>();
        
        bool loop = true;
        
        Console.WriteLine("Enter words: (exit, to exit) ");

        while (loop)
        {
            string input = Console.ReadLine();

            if (input == "exit")
            {
                break;
            }
            
            words.Add(input);
        }
        
        words.Reverse();

        foreach (string word in words)
        {
            Console.WriteLine(word);
        }
    }
}
