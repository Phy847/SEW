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
}