namespace SEWCS5._4.functions.Alltogether;

public class PasswordValidator
{
    static string ReadInput()
    {
        Console.WriteLine("Enter password: ");
        return Console.ReadLine();
    }

    static bool CheckLength(string password)
    {
        if (password.Length < 8)
        {
            Console.WriteLine("Fehler: Passwort muss mindestens 8 Zeichen lang sein.");
            return false;
        }

        return true;
    }

    static bool CheckUppercase(string password)
    {
        foreach (char c in password)
        {
            if (char.IsUpper(c))
            {
                return true;
            }
        }

        Console.WriteLine("Fehler: Passwort muss mindestens einen Großbuchstaben enthalten.");
        return false;
    }

    static bool CheckLowercase(string password)
    {
        foreach (char c in password)
        {
            if (char.IsLower(c))
            {
                return true;
            }
        }

        Console.WriteLine("Fehler: Passwort muss mindestens einen Kleinbuchstaben enthalten.");
        return false;
    }

    static bool CheckNumber(string password)
    {
        foreach (char c in password)
        {
            if (char.IsDigit(c))
            {
                return true;
            }
        }

        Console.WriteLine("Fehler: Passwort muss mindestens eine Zahl enthalten.");
        return false;
    }

    static bool CheckSpecialCharacter(string password)
    {
        string specialChars = "!@#$%&*";

        foreach (char c in password)
        {
            if (specialChars.Contains(c))
            {
                return true;
            }
        }

        Console.WriteLine("Fehler: Passwort muss mindestens ein Sonderzeichen (!@#$%&*) enthalten.");
        return false;
    }

    static bool IsValid(string password)
    {
        bool lengthCheck = CheckLength(password);
        bool upperCheck = CheckUppercase(password);
        bool lowerCheck = CheckLowercase(password);
        bool numberCheck = CheckNumber(password);
        bool specialCheck = CheckSpecialCharacter(password);

        return lengthCheck &&
               upperCheck &&
               lowerCheck &&
               numberCheck &&
               specialCheck;
    }

    public static void passwordValidator()
    {
        string password = ReadInput();

        bool isValid = IsValid(password);

        if (isValid)
        {
            Console.WriteLine("Passwort ist gültig.");
        }
        else
        {
            Console.WriteLine("Passwort ist ungültig.");
        }
    }
}