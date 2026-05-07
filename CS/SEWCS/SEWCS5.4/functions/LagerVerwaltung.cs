namespace SEWCS5._4.functions;

public class LagerVerwaltung
{
    static List<string> productNames = new List<string>();
    static List<int> stockAmounts = new List<int>();

    static void AddProduct()
    {
        Console.Write("Product name: ");
        string name = Console.ReadLine();

        Console.Write("Stock amount: ");
        int stock = int.Parse(Console.ReadLine());

        productNames.Add(name);
        stockAmounts.Add(stock);
    }

    static void ChangeStock()
    {
        Console.Write("Product name: ");
        string name = Console.ReadLine();

        int index = productNames.IndexOf(name);

        if (index != -1)
        {
            Console.Write("New stock amount: ");
            stockAmounts[index] = int.Parse(Console.ReadLine());
        }
        else
        {
            Console.WriteLine("Product not found.");
        }
    }

    static void SearchProduct()
    {
        Console.Write("Product name: ");
        string name = Console.ReadLine();

        int index = productNames.IndexOf(name);

        if (index != -1)
        {
            Console.WriteLine($"Stock: {stockAmounts[index]}");
        }
        else
        {
            Console.WriteLine("Product not found.");
        }
    }

    static void ShowLowStock()
    {
        for (int i = 0; i < productNames.Count; i++)
        {
            if (stockAmounts[i] < 10)
            {
                Console.WriteLine($"{productNames[i]} -> {stockAmounts[i]}");
            }
        }
    }

    static void ShowAllProducts()
    {
        for (int i = 0; i < productNames.Count; i++)
        {
            Console.WriteLine($"{productNames[i]} -> {stockAmounts[i]}");
        }
    }

    public static void lagerVerwaltung()
    {
        bool isLoop = true;

        while (isLoop)
        {
            Console.WriteLine("1 Add product");
            Console.WriteLine("2 Change stock");
            Console.WriteLine("3 Search product");
            Console.WriteLine("4 Show low stock");
            Console.WriteLine("5 Show all products");
            Console.WriteLine("-1  Exit");

            Console.Write("Choice: ");
            string choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    AddProduct();
                    break;

                case "2":
                    ChangeStock();
                    break;

                case "3":
                    SearchProduct();
                    break;

                case "4":
                    ShowLowStock();
                    break;

                case "5":
                    ShowAllProducts();
                    break;

                case "-1":
                    isLoop = false;
                    break;

                default:
                    Console.WriteLine("Invalid input.");
                    break;
            }
        }
    }
}