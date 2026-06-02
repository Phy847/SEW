using System.Runtime.CompilerServices;

namespace Minesweeper;

public class Functions
{
    public static void DisplayField(int width, int height)
    {
        Console.Clear();
        string numbers = " 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20";

        Console.WriteLine("    " + numbers.Substring(0, width * 2));
        //Console.WriteLine("   " + new string('-', width * 2 + 1));

        for (int y = 1; y <= height; y++)
        {
            string row = new string('.', width).Replace(".", ". ");
        
            string distance = (y < 10) ? " " : "";
            Console.WriteLine($"{distance}{y}   {row}");
        }
    }

    public static bool[,] CreateMatrix(int width, int height, int bombs)
    {
        bool[,] matrix = new bool[height, width];
        
        Random random = new Random();

        int placed = 0;

        while (placed < bombs)
        {
            int x = random.Next(width);
            int y = random.Next(height);

            if (!matrix[y, x])
            {
                matrix[y, x] = true;
                placed++;
            }
        }

        return matrix;
    }

    public static bool[,] DifficultySelection ()
    {
        int height = 0;
        int width = 0;
        int bombs = 0;
        
        Console.WriteLine("Select difficulty (easy, medium, hard, tus nicht (write selection)");
        string selection = Console.ReadLine().ToLower();

        switch (selection)
        {
            case "easy":
                height = 10;
                width = 7;
                bombs = 8;
                break;
            case "medium":
                height = 10;
                width = 14;
                bombs = 20;
                break;
            case "hard":
                height = 20;
                width = 14;
                bombs = 50;
                break;
            case "tus nicht":
                height = 200;
                width = 200;
                bombs = 200;
                break;
        }

        bool[,] matrix = CreateMatrix(width, height, bombs);

        return matrix;
    }
}