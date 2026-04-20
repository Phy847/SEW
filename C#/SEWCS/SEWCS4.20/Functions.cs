using System.ComponentModel;

namespace SEWCS4._20;

public class Functions
{
    public static void Taschenrechner()
    {
        Console.Write("Enter first number");
        double n1 = double.Parse(Console.ReadLine());

        Console.Write("Enter Operator");
        char op = char.Parse(Console.ReadLine());
        
        Console.Write("Enter second number");
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
            case default:
                Console.WriteLine("Invalid");
                break;
        }
    }
}