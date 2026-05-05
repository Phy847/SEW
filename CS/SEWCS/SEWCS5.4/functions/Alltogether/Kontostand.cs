namespace SEWCS5._4.functions.Alltogether;

public class Kontostand
{

    static double[] addMoney(double[] accounts)
    {
        Console.WriteLine("Choose account: (0-4)");
        int account = int.Parse(Console.ReadLine());
        Console.WriteLine("Choose amount to add: ");
        double amount = double.Parse(Console.ReadLine());
        
        accounts[account] += amount;
        
        return accounts;
    }

    static double[] withdraw(double[] accounts)
    {
        Console.WriteLine("Choose account: (0-4)");
        int account = int.Parse(Console.ReadLine());
        Console.WriteLine("Choose amount to withdraw: ");
        double amount = double.Parse(Console.ReadLine());

        if (amount > accounts[account])
        {
            Console.WriteLine("You cannot withdraw more than you have in your account!");
        }
        else
        {
            accounts[account] -= amount;
        }
        
        return accounts;
    }

    static double totalSum(double[] accounts)
    {
        double sum = 0;

        foreach (double account in accounts)
        {
            sum += account;
        }
        
        return sum;
    }

    static void PoorRichratio(double[] accounts)
    {
        int poorPeople = 0;
        int richPeople = 0;

        foreach (double account in accounts)
        {
            if (account < 100)
            {
                poorPeople++;
            } else if (account > 1000)
            {
                richPeople++;
            }
        }
        
        Console.WriteLine($"{poorPeople} have less than 100");
        Console.WriteLine($"{richPeople} have more than 1000");
        Console.WriteLine();
    }
    
    public static void kontostand()
    {
        double[] accounts = [250.50, 1200.00, 80.30, 560.75, 45.20];

        bool isLoop = true;

        while (isLoop)
        {
            Console.WriteLine("What would you like to do?");
            Console.WriteLine("1 show accounts");
            Console.WriteLine("2 addMoney");
            Console.WriteLine("3 withdrawMoney");
            Console.WriteLine("4 calculate total sum");
            Console.WriteLine("5 show analysis");
            Console.WriteLine("-1 to exit");
            
            int input = int.Parse(Console.ReadLine());
            Console.WriteLine();

            switch (input)
            {
                case 1:
                    foreach (double account in accounts)
                    {
                        Console.WriteLine(account);
                    }
                    Console.WriteLine();
                    break;
                    
                case 2: accounts = addMoney(accounts); break;
                case 3: accounts = withdraw(accounts); break;
                case 4: Console.WriteLine(totalSum(accounts)); Console.WriteLine(); break;
                case 5: PoorRichratio(accounts); break;
                case -1: isLoop = false; break;
            }
        }

    }
}