namespace SEWCS5._4.fun.Alltogether;

public class WeekdayConverter
{
    public static void weekdayConverter()
    {
        Console.Write("Enter day of the week (1-7): ");
        int input = int.Parse(Console.ReadLine());
        Console.WriteLine("That is: ");

        switch (input)
        {
            case 1: Console.WriteLine("Monday"); break;
            case 2: Console.WriteLine("Tuesday"); break;
            case 3: Console.WriteLine("Wednesday"); break;
            case 4: Console.WriteLine("Thursday"); break;
            case 5: Console.WriteLine("Friday"); break;
            case 6: Console.WriteLine("Saturday"); break;
            case 7: Console.WriteLine("Sunday"); break;
            default: Console.WriteLine("Invalid input"); break;
        }

        List<string> weekdays = new List<string>()
        {
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        };

        Console.WriteLine();
        Console.WriteLine("All weekdays: ");

        foreach (string day in weekdays)
        {
            Console.WriteLine(day);
        }

        Console.WriteLine();
        Console.WriteLine("In reverse order: ");

        for (int i = weekdays.Count; i > 0; i--)
        {
            Console.WriteLine(weekdays[i - 1]);
        }
    }
}