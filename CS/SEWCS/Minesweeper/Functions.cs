namespace Minesweeper;

public enum Field //erstellt enum mit den datentypen + zugeordnete werte
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
    public Field[,] Efield(int width, int height, int bombs) //erstellt ein Feld mit bombem variable größe
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

    public Field[,] DifficultySelect() //ruft die obere func auf mit dem passenden werten
    {
        
        Console.WriteLine("Choose Difficulty: easy, medium, hard, tus nicht");
        string input = Console.ReadLine();

        switch (input)
        {
            case "easy":
                return Efield(7, 10, 8);
            
            case "medium":
                return Efield(14, 10, 20);
            
            case "hard":
                return Efield(14, 20, 50);
            
            case "tus nicht":
                return Efield(25, 25, 100);
            
            default: Console.WriteLine("Invalid Argument! choosing easy-mode"); return Efield(7, 10, 8);
        }
    }

    private Field[,] field; //dings da definieren sonnst kann mans unten nich aufrufen
    private bool[,] revealed;
    
    public void CreateGame()
    {
        field = DifficultySelect(); //erstellt das Feld

        revealed = new bool[field.GetLength(0), field.GetLength(1)]; //2. matrix für aufgedeckte zellen

        PlaceNumbers(); //platziert die ganzen zahlen ob eine bombe in der nähe ist
    }

    private void PlaceNumbers()
    {
        for (int row = 0; row < field.GetLength(0); row++)
        {
            for (int col = 0; col < field.GetLength(1); col++)
            {
                if (field[row, col] != Field.mine)
                {
                    int mines = CountMinesAround(row, col); //zählt mines drumadum
                    field[row, col] = (Field)mines; //wandelt int mines zu Field datentyp um
                }
            }
        }
    }

    private int CountMinesAround(int row, int col)
    {
        int count = 0; //nur die anzahl an minen di drumherum sind

        for (int r = row - 1; r <= row + 1; r++)
        {
            for (int c = col - 1; c <= col + 1; c++)
            {
                if (r >= 0 && r < field.GetLength(0) && c >= 0 && c < field.GetLength(1)) //prüft ob index gültig is
                {
                    if (field[r, c] == Field.mine)
                    {
                        count++;
                    }
                }
            }
        }
        
        return count;
    }
}