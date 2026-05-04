namespace SEWCS5._4.fun.Alltogether;

public class TempAnalysis
{
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

    public static void tempAnalysis(double[] temperature)
    {
        Console.WriteLine($"The average temperature was {AvgTemp(temperature)}");
        Console.WriteLine($"The highest temperature was {MaxTemp(temperature)}");
        Console.WriteLine($"The lowest temperature was {MinTemp(temperature)}");
        Console.WriteLine($"It was above 20° on {HighTemp(temperature)} day(s)");
    }
}