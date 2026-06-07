namespace Minesweeper;

public enum Field
{
    mine = -1,
    empty = 0,
    one = 1,
    two = 2,
    three = 3,
    four = 4,
    five = 5,
    six = 6,
    seven = 7,
    eight = 8,
}

public class Functions
{
    public Field[,] Efield(int width, int height, int bombs)
    {
        Field[,] Efield = new Field[height, width];
        
        Random random = new Random();

        int placed = 0;

        while (placed < bombs)
        {
            int row = random.Next(height);
            int column = random.Next(width);

            if (Efield[row, column] != Field.mine)
            {
                Efield[row, column] = Field.mine;
                placed++;
            }
        }
        return Efield;
    }

    public Field[,] DifficultySelect()
    {
        int width = 0;
        int height = 0;
        int bombs = 0;
        
        Console.WriteLine("Choose Difficulty: easy, medium, hard, tus nicht");
        string input = Console.ReadLine();

        switch (input)
        {
            case "easy":
                width = 7;
                height = 10;
                bombs = 8;
                break;
            
            case "medium":
                width = 14;
                height = 10;
                bombs = 20;
                break;
            
            case "hard":
                width = 14;
                height = 20;
                bombs = 50;
                break;
            
            case "tus nicht":
                width = 25;
                height = 25;
                bombs = 100;
                break;
        }
        
        return Efield(width, height, bombs);
    }
}