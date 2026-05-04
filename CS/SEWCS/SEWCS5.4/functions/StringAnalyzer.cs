namespace SEWCS5._4.functions;

public class StringAnalyzer
{

    static int GetLetterCount(string text)
    {
        return text.Length;
    }

    static int GetVocalCount (string text)
    {
        int count = 0;

        foreach (char a in text)
        {
            if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
            {
                count++;
            }
        }
        return count;
    }

    static int GetWordCount(string text)
    {
        return text.Split(' ').Length;
    }

    static double GetAvgWordCount(string text)
    {
        return (double)GetLetterCount(text) / GetWordCount(text);
    }
    
    public static void stringAnalyzer ()
    {
        string text = "Hello, World!";
        
        int letters = GetLetterCount(text);
        int wordCount = GetWordCount(text);
        int vocals = GetVocalCount(text);
        double avgWordCount = GetAvgWordCount(text);
        string newText = text.ToUpper();
    }
}