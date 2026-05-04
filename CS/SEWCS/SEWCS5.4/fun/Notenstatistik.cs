using System.Runtime.InteropServices;

namespace SEWCS5._4.fun;

public class Notenstatistik
{

    static int[] GetGrades(int length)
    {
        int[] grades = new int[length];

        for (int i = 0; i < grades.Length; i++)
        {
            Console.Write("Enter Grade: ");
            grades[i] = int.Parse(Console.ReadLine());
        }
        return grades;
    }

    static double GetAverage(int[] grades)
    {
        double sum = 0;
        
        foreach (int grade in grades)
        {
            sum += grade;
        }
        
        return sum / grades.Length;
    }
    
    public static void notenStatistik()
    {
        int[] grades = GetGrades(6);
        
        double avg = GetAverage(grades);
        int lowest = grades.Min();
        int highest = grades.Max();
        
        Console.WriteLine($"Average: {avg}");
        Console.WriteLine($"Lowest: {lowest}");
        Console.WriteLine($"Highest: {highest}");
    }
}