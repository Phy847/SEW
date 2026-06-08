using Minesweeper;

Console.WriteLine("Welcome to Minesweeper!");

Functions game = new Functions();
game.CreateGame();

void Run()
{
    bool isRunning = true;
    
    while (isRunning)
    {
        game.printgame();
        if (game.unveil() == 1) {
            isRunning = false;
            game.ShowField();
        }
    }
    
    Console.WriteLine("You Lost");
}

Run();