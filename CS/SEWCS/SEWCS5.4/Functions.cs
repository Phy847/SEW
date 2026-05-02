namespace SEWCS5._4;

public class Functions
{
    //All Together funcs Nr.1:

    static double AvgTemp(double[] temperature)
    {
        double sum = 0;

        foreach (double temp in temperature)
        {
            sum += temp;
        }
        
        double sol = sum / temperature.Length;
        return sol;
    }

    static double MaxTemp(double[] temperature)
    {
        return temperature.Max();
    }

    static double MinTemp(double[] temperature)
    {
        return temperature.Min();
    }

    static int HighTemp(double[] temperature)
    {
        int count = 0;
        double TempLimit = 20.0;
        
        foreach (double temp in temperature)
        {
            if (temp > TempLimit)
            {
                count++;
            }
        }

        return count;
    }
    
    //main func Nr. 1:
    
    public static void TempAnalysis(double[] temperature)
    {
        Console.WriteLine($"The average temperature was {AvgTemp(temperature)}");
        Console.WriteLine($"The highest temperature was {MaxTemp(temperature)}");
        Console.WriteLine($"The lowest temperature was {MinTemp(temperature)}");
        Console.WriteLine($"It was above 20° on {HighTemp(temperature)} day(s)");
    }
    
    //Alltogehter funcs Nr. 2:

    static void ShowList(List<string> students)
    {
        foreach (string student in students)
        {
            Console.WriteLine(student);
        }
    }

    static void AddStudent(List<string> students)
    {
        Console.Write("Enter name of student to add: ");
        students.Add(Console.ReadLine());
    }

    static void RemoveStudent(List<string> students)
    {
        Console.Write("Enter name of student to remove: ");
        string input = Console.ReadLine();

        if (students.Contains(input))
        {
            students.Remove(input);
        }
        else
        {
            Console.WriteLine("Invalid name");
        }

    }

    static void SearchStudent(List<string> students)
    {
        List<string> FoundStudents = new List<string>();
        
        Console.Write("Enter first letter of students name: ");
        string input = Console.ReadLine();
        
        char letter = char.ToLower(input[0]);

        foreach (string student in students)
        {
            if (char.ToLower(student[0]) == letter)
            {
                FoundStudents.Add(student);
            }
        }

        foreach (string student in FoundStudents)
        {
            Console.WriteLine(student);
        }
    }
    
    //main func Nr. 2:

    public static void Studentenverwaltung()
    {
        List<string> students = new List<string> { "Gabriel", "Tobias", "Paul", "Alex", "Tobias" };

        bool isLoop = true;

        while (isLoop)
        {
            Console.WriteLine("What do you want to do?");
            Console.WriteLine("show List: 1");
            Console.WriteLine("add student: 2");
            Console.WriteLine("remove student: 3");
            Console.WriteLine("search for student: 4");
            Console.WriteLine("exit: 5");
            int input = int.Parse(Console.ReadLine());

            switch (input)
            {
                case 1: ShowList(students); break;
                case 2: AddStudent(students); break;
                case 3: RemoveStudent(students); break;
                case 4: SearchStudent(students); break;
                case 5: isLoop = false; break;
            }
        }
    }
    
    //Altogether funcs Nr. 3:

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

    public static void CalcSum(int[] numbers)
    {
        
    }

    //main func Nr. 3:

    public static void Zahlenverarbeitung(int[] numbers)
    {
        Console.WriteLine("1: Calc sum; 2: Count even numbers; 3: Find Max");
        int input = int.Parse(Console.ReadLine());

        switch (input)
        {
            case 1: PrintArray(CalcSum(numbers)); break;
            case 2:
        }
    }
}