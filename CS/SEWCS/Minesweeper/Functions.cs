namespace Minesweeper;

public class Functions
{
    public static void DisplayField(int width, int height)
    {
        Console.Clear();
        string alphabet = " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";

        Console.WriteLine("    " + alphabet.Substring(0, width * 2));
        //Console.WriteLine("   " + new string('-', width * 2 + 1));

        for (int y = 1; y <= height; y++)
        {
            string row = new string('X', width).Replace("X", "X ");
        
            string distance = (y < 10) ? " " : "";
            Console.WriteLine($"{distance}{y}   {row}");
        }
    }
}