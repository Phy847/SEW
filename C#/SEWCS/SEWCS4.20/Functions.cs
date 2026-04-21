using System.ComponentModel;

namespace SEWCS4._20;

public class Functions
{
    public static void Taschenrechner()
    {
        Console.Write("Enter first number: ");
        double n1 = double.Parse(Console.ReadLine());

        Console.Write("Enter Operator: ");
        char op = char.Parse(Console.ReadLine());
        
        Console.Write("Enter second number: ");
        double n2 = double.Parse(Console.ReadLine());

        switch (op)
        {
            case '+':
                Console.Write($"result: {n1 + n2}");
                break;
            case '-':
                Console.Write($"result: {n1 - n2}");
                break;
            case '*':
                Console.Write($"result: {n1 * n2}");
                break;
            case '/':
                if (n2 == 0)
                {
                    Console.WriteLine("Division by zero is not possible");
                    return;
                }
                else
                {
                    Console.Write($"result: {n1 / n2}");
                    break;
                }
            default:
                Console.WriteLine("Invalid");
                break;
        }
    }

    public static void NumberCheck()
    {
        Console.Write("Enter a number: ");
        int num = int.Parse(Console.ReadLine());

        if (num > 0)
        {
            Console.Write("Number is positive");
        } else if (num < 0)
        {
            Console.Write("Number is negative");
        }
        else
        {
            Console.Write("Number is zero");
        }
    }

    public static void TriangleValidator()
    {
        Console.Write("Enter the length of the first side of your triangle: ");
        double a = double.Parse(Console.ReadLine());
        Console.Write("Enter the length of the second side of your triangle: ");
        double b = double.Parse(Console.ReadLine());
        Console.Write("Enter the length of the third side of your triangle: ");
        double c = double.Parse(Console.ReadLine());
        
        if (a + b > c && a + c > b && b + c > a)
        {
            Console.WriteLine("The triangle is valid");
        }
        else
        {
            Console.WriteLine("The triangle is not valid");
        }
    }

    public static void ShoppingDiscount()
    {
        Console.Write("Enter the price of your shopping cart: ");
        double price = double.Parse(Console.ReadLine());

        if (price >= 200)
        {
            Console.WriteLine("Your discount is 20%");
            Console.WriteLine($"Your total is {price * 0.8}");
        } else if (price >= 100)
        {
            Console.WriteLine("Your discount is 10%");
            Console.WriteLine($"Your total is {price * 0.9}");
        }
        else
        {
            Console.WriteLine("Your discount is 5%");
            Console.WriteLine($"Your total is {price * 0.95}");
        }
    }

    public static void WeatherAdvisor()
    {
        Console.Write("Enter the temperature in Celsius: ");
        double temp = double.Parse(Console.ReadLine());
        Console.Write("Is it raining? (y/n):");
        string rain = Console.ReadLine();

        if (rain == "y")
        {
            if (temp < 10)
            {
                Console.Write("Wear a jacket and take an umbrella with you!");
            }
            else
            {
                Console.Write("A jacket is enough!");
            }
        } else if (rain == "n")
        {
            if (temp < 10)
            {
                Console.Write("A warm hoodie would be wise!");
            }
            else
            {
                Console.Write("A shirt is ok!");
            }
        }
        else
        {
            Console.Write("Invalid input");
        }
    }

    public static void MonthText()
    {
        Console.Write("Enter a month (1-12): ");
        int month = int.Parse(Console.ReadLine());

        switch (month)
        {
            case 1: Console.WriteLine("January"); break;
            case 2: Console.WriteLine("February"); break;
            case 3: Console.WriteLine("March"); break;
            case 4: Console.WriteLine("April"); break;
            case 5: Console.WriteLine("May"); break;
            case 6: Console.WriteLine("June"); break;
            case 7: Console.WriteLine("July"); break;
            case 8: Console.WriteLine("August"); break;
            case 9: Console.WriteLine("September"); break;
            case 10: Console.WriteLine("October"); break;
            case 11: Console.WriteLine("November"); break;
            case 12: Console.WriteLine("December"); break;
            default: Console.WriteLine("Invalid month"); break;
        }
    }

    public static void TrafficLight()
    {
        Console.Write("Which color is the traffic light? (red, yellow, green):");
        string color = Console.ReadLine();

        switch (color)
        {
            case "red": Console.WriteLine("Stop"); break;
            case "yellow": Console.WriteLine("Attention"); break;
            case "green": Console.WriteLine("Go"); break;
            default: Console.WriteLine("Invalid color"); break;
        }
    }

    public static void GradeConverter()
    {
        Console.Write("Enter your grade (1-5)");
        int grade = int.Parse(Console.ReadLine());

        switch (grade)
        {
            case 1: Console.WriteLine("Very Good"); break;
            case 2: Console.WriteLine("Good"); break;
            case 3: Console.WriteLine("Satisfactory"); break;
            case 4: Console.WriteLine("Sufficient"); break;
            case 5: Console.WriteLine("Unsatisfactory"); break;
            default: Console.WriteLine("Invalid grade"); break;
        }
    }

    public static void PizzaConfigurator()
    {
        Console.Write("Enter the size of your pizza (s, m, l)");
        char size = char.Parse(Console.ReadLine());

        double price = 0;

        switch (size)
        {
            case 's':
                price = 7;
                break;
            
            case 'm':
                price = 9;
                break;
            
            case 'l':
                price = 12;
                break;
            
            default: Console.WriteLine("Invalid size"); break;
        }
        
        Console.Write("Would you like extra cheese? (y/n)");
        string cheese = Console.ReadLine();

        if (cheese == "y")
        {
            price += 1.50;
        }
        
        Console.WriteLine($"Your total is {price}€");
    }

    public static void SeasonFinder()
    {
        Console.Write("Enter the month (1-12): ");
        int month = int.Parse(Console.ReadLine());

        switch (month)
        {
            case 1:
            case 2:
            case 12:
                Console.Write("Winter"); break;
            case 3:
            case 4:
            case 5:
                Console.Write("Spring"); break;
            case 6:
            case 7:
            case 8:
                Console.Write("Summer"); break;
            case 9:
            case 10:
            case 11:
                Console.Write("Autumn"); break;
            default: Console.Write("Invalid month"); break;
        }
    }

    public static void RomanNumeralConverter()
    {
        Console.Write("Enter a number between 1 and 10: ");
        int number = int.Parse(Console.ReadLine());

        switch (number)
        {
            case 1: Console.WriteLine("I"); break;
            case 2: Console.WriteLine("II"); break;
            case 3: Console.WriteLine("III"); break;
            case 4: Console.WriteLine("IV"); break;
            case 5: Console.WriteLine("V"); break;
            case 6: Console.WriteLine("VI"); break;
            case 7: Console.WriteLine("VII"); break;
            case 8: Console.WriteLine("VIII"); break;
            case 9: Console.WriteLine("IX"); break;
            case 10: Console.WriteLine("X"); break;
            default: Console.WriteLine("Invalid number"); break;
        }
    }
    
    public static void EvenCounter () 
    {
        for (int i = 0; i <= 100; i++) 
        {
            if (i % 2 == 0)
            {
                Console.WriteLine($"{i}");
            }
        }
    }

    public static void SumOfN()
    {
        Console.Write("Enter a number: ");
        int n = int.Parse(Console.ReadLine());

        int sum = 0;

        for (int i = 0; i <= n; i++)
        {
            sum += i;
            Console.WriteLine(sum);
        }
    }

    public static void SquareOfStars()
    {
        Console.Write("Enter number of Lines: ");
        int lines = int.Parse(Console.ReadLine());

        for (int i = 0; i < lines; i++)
        {
            Console.WriteLine("****");
        }
    }

    public static void PrimeNumberChecker()
    {
        Console.Write("Enter a number: ");
        int number = int.Parse(Console.ReadLine());

        bool isPrime = true;

        for (int i = 2; i <= number / 2; i++)
        {
            if (number <= 1)
            {
                isPrime = false;
            }
            
            if (number % i == 0)
            {
                isPrime = false;
                break;
            }
        }

        Console.Write($"{number} is prime: {isPrime}");
    }

    public static void NumberGuessingGame()
    {
        Random random = new Random();
        int number = random.Next(1, 101);

        int guess;
        int trys = 0;

        do
        {
            Console.Write("Your guess: ");
            guess = int.Parse(Console.ReadLine());
            trys++;

            if (guess > number)
            {
                Console.WriteLine("Too high!");
            } else if (guess < number)
            {
                Console.WriteLine("Too low!");
                
            } else
            {
                Console.WriteLine($"You guessed it in {trys} tries!");
                break;
            }
        } while (guess != number);
    }

    public static void MultiplicationTable()
    {
        int size = 8;

        for (int row = 0; row < size; row++)
        {
            for (int col = 0; col < size; col++)
            {
                if ((row + col) % 2 == 0)
                {
                    Console.Write('#');
                }
                else
                {
                    Console.Write('.');
                }
            }
            Console.WriteLine();
        }
    }
}