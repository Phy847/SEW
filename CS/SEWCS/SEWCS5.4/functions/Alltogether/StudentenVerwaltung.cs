namespace SEWCS5._4.fun.Alltogether;

public class StudentenVerwaltung
{
    static void ShowList(List<string> students)
    {
        foreach (string student in students)
        {
            Console.WriteLine(student);
        }
    }

    static void AddStudent(List<string> students)
    {
        Console.Write("Enter name of student to add: ");
        students.Add(Console.ReadLine());
    }

    static void RemoveStudent(List<string> students)
    {
        Console.Write("Enter name of student to remove: ");
        string input = Console.ReadLine();

        if (students.Contains(input))
        {
            students.Remove(input);
        }
        else
        {
            Console.WriteLine("Invalid name");
        }

    }

    static void SearchStudent(List<string> students)
    {
        List<string> FoundStudents = new List<string>();
        
        Console.Write("Enter first letter of students name: ");
        string input = Console.ReadLine();
        
        char letter = char.ToLower(input[0]);

        foreach (string student in students)
        {
            if (char.ToLower(student[0]) == letter)
            {
                FoundStudents.Add(student);
            }
        }

        foreach (string student in FoundStudents)
        {
            Console.WriteLine(student);
        }
    }

    public static void studentenverwaltung()
    {
        List<string> students = new List<string> { "Gabriel", "Tobias", "Paul", "Alex", "Tobias" };

        bool isLoop = true;

        while (isLoop)
        {
            Console.WriteLine("What do you want to do?");
            Console.WriteLine("show List: 1");
            Console.WriteLine("add student: 2");
            Console.WriteLine("remove student: 3");
            Console.WriteLine("search for student: 4");
            Console.WriteLine("exit: 5");
            int input = int.Parse(Console.ReadLine());

            switch (input)
            {
                case 1: ShowList(students); break;
                case 2: AddStudent(students); break;
                case 3: RemoveStudent(students); break;
                case 4: SearchStudent(students); break;
                case 5: isLoop = false; break;
            }
        }
    }
}