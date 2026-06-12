using Minesweeper;

Console.WriteLine("Welcome to Minesweeper!");

Functions game = new Functions();
game.CreateGame();

void Run()
{
    bool isRunning = true;
    
    while (isRunning)
    {
        Console.Clear();
        game.ShowField();
        int result = game.unveil();
        if (result == 1) {
            isRunning = false;
            game.ShowField();
        }
        else if (result == 2)
        {
            isRunning = false;
            game.ShowField();
            Console.WriteLine("You Won!");
            return;
        }
    }
    
    Console.WriteLine("You Lost");
}

Run();