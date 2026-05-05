namespace SEWCS5._4.functions.Alltogether;

public class PasswordValidator
{

    static string ReadInput()
    {
        Console.WriteLine("Enter password: ");
        return Console.ReadLine();
    }

    public static bool IsValid(string password)
    {
        bool lengthCheck = password.Length >= 8;
        bool upperCheck = false;
        bool lowerCheck = false;
        bool numberCheck = false;
        bool specialCheck = false;

        foreach (char c in password)
        {
            if (char.IsUpper(c)) upperCheck = true;
            if (char.IsLower(c)) lowerCheck = true;
            if (char.IsDigit(c)) numberCheck = true;
            if ("!@#$%&*".Contains(c)) specialCheck = true;
        }

        return lengthCheck && upperCheck && lowerCheck && numberCheck && specialCheck;
    }
    
    public static void passwordValidator()
    {
        string password = ReadInput();
        bool isValid = IsValid(password);
        
        Console.WriteLine($"Password validation: {isValid}");
    }
}