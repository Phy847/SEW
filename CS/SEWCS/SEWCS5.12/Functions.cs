using System.Diagnostics.CodeAnalysis;

namespace SEWCS5._12;

public class Functions
{
    static int[] GenerateValues ()
    {
        Random random = new Random();
        int[] values = new int[10];

        for (int i = 0; i < values.Length; i++)
        {
            values[i] = random.Next(0, 121);
        }
        
        return values;
    }

    static void PrintValues (int[] values)
    {
        foreach (int value in values)
        {
            Console.WriteLine(value);
        }
    }

    static int CheckCritical (int[] values)
    {
        int count = 0;
        
        foreach (int value in values)
        {
            if (value < 100)
            {
                count++;
            }
        }

        return count;
    }

    static int FindMax(int[] values)
    {
        return values.Max();
    }

    static int FindMin(int[] values)
    {
        return values.Min();
    }

    static double CalculateAverage(int[] values)
    {
        return values.Average();
    }
    
    public static void Sensorüberwachung()
    {
        int[] temperatures = GenerateValues();
        
        PrintValues(temperatures);
        
        int critical = CheckCritical(temperatures);
        int max = FindMax(temperatures);
        int min = FindMin(temperatures);
        double avg = CalculateAverage(temperatures);
        
        Console.WriteLine($"critical: {critical}");
        Console.WriteLine($"max: {max}");
        Console.WriteLine($"min: {min}");
        Console.WriteLine($"avg: {avg}");
    }
    
    //---------------------------------------------------------------------------------

    static int[] GeneratePin()
    {
        Random random = new Random();
        int[] pins = new int[8];

        for (int i = 0; i < pins.Length; i++)
        {
            pins[i] = random.Next(1000, 10000);
        }

        return pins;
    }

    static void PrintPrins(int[] pins)
    {
        foreach (int pin in pins)
        {
            Console.WriteLine(pin);
        }
    }

    static void ClassifyPins(int[] pins)
    {
        foreach (int pin in pins)
        {
            if (pin < 1000)
            {
                Console.WriteLine($"{pin} Invalid PIN!");
            }
            else if (pin % 2 == 0)
            {
                Console.WriteLine($"{pin} even acces");
            }
            else
            {
                Console.WriteLine($"{pin} normal acces");
            }
        }
    }

    static int CountEven(int[] pins)
    {
        int count = 0;

        foreach (int pin in pins)
        {
            if (pin % 2 == 0)
            {
                count++;
            }
        }
        
        return count;
    }

    public static void ZugriffsSystem()
    {
        int[] pins = GeneratePin();
        
        PrintPrins(pins);
        
        ClassifyPins(pins);
        
        int even =  CountEven(pins);
        
        Console.WriteLine($"Even: {even}");
    }
    
    //---------------------------------------------------------------------------------

    static string ReadText()
    {
        Console.WriteLine("Enter text: ");
        string text = Console.ReadLine();
        
        return text;
    }

    static char[] ToCharArray(string text)
    {
        return text.ToCharArray();
    }

    static int CountUpper(char[] text)
    {
        int count = 0;

        foreach (char c in text)
        {
            if (char.IsUpper(c))
            {
                count++;
            }
        }
        
        return count;
    }

    static int CountDigits(char[] text)
    {
        int count = 0;

        foreach (char c in text)
        {
            if (char.IsDigit(c))
            {
                count++;
            }
        }
        
        return count;
    }

    static void PrintResult(int len, int upper, int digits)
    {
        Console.WriteLine($"Length: {len}");
        Console.WriteLine($"Upper: {upper}");
        Console.WriteLine($"Digits: {digits}");
    }
    
    public static void TextcodeAnalyse()
    {
        string text = ReadText();
        
        char[] chars = ToCharArray(text);
        
        int upper = CountUpper(chars);
        int digits = CountDigits(chars);
        
        PrintResult(chars.Length, upper, digits);
    }
    
    //---------------------------------------------------------------------------------

    static int[] GenerateGrades()
    {
        Random random = new Random();
        int[] grades = new int[10];

        for (int i = 0; i < grades.Length; i++)
        {
            grades[i] = random.Next(0, 101);
        }
        
        return grades;
    }

    static int CountPassed(int[] grades)
    {
        int passed = 0;

        foreach (int grade in grades)
        {
            if (grade >= 50)
            {
                passed++;
            }
        }
        
        return passed;
    }

    static int CountFailed(int[] grades)
    {
        int failed = 0;

        foreach (int grade in grades)
        {
            if (grade < 50)
            {
                failed++;
            }
        }
        
        return failed;
    }

    static double Average(int[] grades)
    {
        return grades.Average();
    }

    static void PrintReport(int passed, int failed, double avg)
    {   
        Console.WriteLine($"passed: {passed}");
        Console.WriteLine($"failed: {failed}");
        Console.WriteLine($"avg: {avg}");
    }
    
    public static void Zufallsprüfung()
    {
        int[] grades = GenerateGrades();
        
        int passed = CountPassed(grades);
        int failed = CountFailed(grades);
        
        double average = Average(grades);
        
        PrintReport(passed, failed, average);
    }
    
    //---------------------------------------------------------------------------------

    static int[] GenerateLogs()
    {
        Random random = new Random();
        int[] logs = new int[12];

        for (int i = 0; i < logs.Length; i++)
        {
            logs[i] = random.Next(0, 3);
        }
        
        return logs;
    }

    static void CountStatus(int[] logs)
    {
        int ok = 0, warn = 0, error = 0;

        foreach (int log in logs)
        {
            switch (log)
            {
                case 0: ok++; break;
                case 1: warn++; break;
                case 2: error++; break;
            }
        }
        
        Console.WriteLine($"OK: {ok}, Warning: {warn}, Error: {error}");
    }

    static void PrintLogs(int[] logs)
    {
        foreach (int log in logs)
        {
            Console.WriteLine(log);
        }
    }

    static void SwitchAnalysis(int[] logs)
    {
        foreach (int log in logs)
        {
            switch (log)
            {
                case 0: Console.WriteLine("OK"); break;
                case 1: Console.WriteLine("Warning"); break;
                case 2: Console.WriteLine("Error"); break;
            }
        }
    }
    
    public static void CodeValidierung()
    {
        int[] logs = GenerateLogs();
        
        PrintLogs(logs);
        
        CountStatus(logs);

        SwitchAnalysis(logs);
    }
    
    //---------------------------------------------------------------------------------

    static int[,] GenerateProduction()
    {
        Random random = new Random();
        int[,] matrix = new int[4, 5];

        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                matrix[i, j] = random.Next(10, 101);
            }
        }
        
        return matrix;
    }

    static void PrintMatrix(int[,] matrix)
    {
        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                Console.Write(matrix[i, j] + " ");
            }
            Console.WriteLine();
        }
    }

    static int FindBest(int[,] matrix)
    {
        int bestsum = 0;
        int bestindex = 0;

        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            int sum = 0;
            
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                sum += matrix[i, j];
            }

            if (sum > bestsum)
            {
                bestsum = sum;
                bestindex = i;
            }
        }
        
        return bestindex;
    }

    static int FindWorst(int[,] matrix)
    {
        int worst = 0;
        int index = 0;

        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            int sum = 0;

            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                sum += matrix[i, j];
            }

            if (sum < worst)
            {
                worst = sum;
                index = i;
            }
        }
        
        return index;
    }

    static int CalculateTotal(int[,] matrix)
    {
        int total = 0;

        for (int i = 0; i < matrix.GetLength(0); i++)
        {
            for (int j = 0; j < matrix.GetLength(1); j++)
            {
                total += matrix[i, j];
            }
        }

        return total;
    }

    public static void ProduktionsMatrix()
    {
        int[,] data = GenerateProduction();
        
        PrintMatrix(data);
        
        int total = CalculateTotal(data);
        
        int best = FindBest(data);
        int worst = FindWorst(data);
        
        Console.WriteLine($"total: {total}");
        Console.WriteLine($"best: {best}");
        Console.WriteLine($"worst: {worst}");
    }
}