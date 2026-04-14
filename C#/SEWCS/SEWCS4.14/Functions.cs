namespace SEWCS4._14;

public class Functions
{
    public static void BmiCalculator()
    {
        Console.Write("Enter your name:");
        string name = Console.ReadLine();

        Console.Write("Enter your weight:");
        double weight = double.Parse(Console.ReadLine());

        Console.Write("Enter your height:");
        double height = double.Parse(Console.ReadLine());

        double newWeight = height * height;

        double Bmi = weight / newWeight;

        Bmi *= 10000;

        Console.WriteLine($"{name} dein BMI beträgt {Bmi}");


    }

    public static void TemperatureConverter()
    {
        Console.Write("Enter a Temperature (Celsius):");
        double temp = double.Parse(Console.ReadLine());

        double far = temp * 1.8 + 32;

        double kel = temp + 273.15;
        
        Console.WriteLine($"{temp} grad ist {far} in Farenheit und {kel} in Kelvin");
    }

    public static void CircleGeometry()
    {
        Console.Write("Enter the radius of your circle:");
        double radius = double.Parse(Console.ReadLine());

        double circumference = 2 * 3.14159 * radius;

        double area = 3.14159 * (radius * radius);
        
        Console.WriteLine($"Dein Kreis hat einen Umfang von {circumference} und eine Fläche von {area}");
    }

    public static void TimeSplitter()
    {
        Console.Write("Enter a time period (in seconds):");
        int seconds = int.Parse(Console.ReadLine());

        int hours = seconds / 3600;
        int minutes = (seconds / 60) % 60;
        int extraseconds = seconds % 60;

        Console.Write($"{seconds} sind {hours} stunde(n) {minutes} minuten und {extraseconds} sekunden.");
    }

    public static void AverageCalculator()
    {
        Console.Write("Enter 3 whole numbers to calculate the average ");
        Console.Write("number 1:");
        int num1 = int.Parse(Console.ReadLine());
        Console.Write("number 2:");
        int num2 = int.Parse(Console.ReadLine());
        Console.Write("number 3:");
        int num3 = int.Parse(Console.ReadLine());
        
        double avg = (num1 + num2 + num3) / 3;
        
        Console.WriteLine($"Your average is {avg}");
    }

    public static void GasStation()
    {
        Console.Write("Enter the amount of Gas you fueled:");
        double litersFilled = double.Parse(Console.ReadLine());
        Console.Write("Enter the price per liter:");
        double price = double.Parse(Console.ReadLine());
        
        double total = litersFilled * price + 1.50;
        
        Console.WriteLine($"Your total is {total}");
    }

    public static void PartyPlanner()
    {
        Console.Write("Enter amount of students:");
        int studentCount = int.Parse(Console.ReadLine());
        Console.Write("Enter amount of pizzas:");
        int pizzaCount = int.Parse(Console.ReadLine());
        
        double sliceCount = pizzaCount * 8;
        
        double slicesPerStudent = sliceCount / studentCount;
        
        double remaining = sliceCount % studentCount;
        
        Console.WriteLine($"Each student gets {slicesPerStudent} slices and the teacher gets {remaining} slices");
    }

    public static void NetGrossConverter()
    {
        Console.Write("Enter net price of product:");
        double price = double.Parse(Console.ReadLine());
        
        double tax = price * 0.2;
        double withTax = price + tax;
        
        Console.WriteLine($"net price: {price}, tax: {tax}, price with tax: {withTax}");
    }

    public static void ExchangeOffice()
    {
        Console.Write("Enter amount in Euros:");
        double money = double.Parse(Console.ReadLine());
        Console.Write("Enter current exchange rate:");
        double exchangeRate = double.Parse(Console.ReadLine());
        
        double provision = money * 0.02;
        double newCurrency = money * exchangeRate;
        double total = newCurrency + provision;
        
        Console.WriteLine($"Your total is {total} for {newCurrency} in your new Currency");
    }

    public static void RunningSpeed()
    {
        Console.Write("Enter distance (in km) you ran:");
        double distance = double.Parse(Console.ReadLine());
        Console.Write("Enter amount of time needed:");
        double time = double.Parse(Console.ReadLine());
        
        double thours = time / 60;
        double speed = distance / thours;
        
        Console.WriteLine($"You ran at a speed of {speed} km/h");
    }
}