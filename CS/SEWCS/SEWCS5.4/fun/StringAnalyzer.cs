namespace SEWCS5._4.fun;

public class StringAnalyzer
{

    static int GetLetterCount(string text)
    {
        return text.Length;
    }

    static int GetVocalCount ()
    {
        
    }

    static int GetWordCount(string text)
    {
        return text.Split(' ').Length;
    }

    static double GetAvgWordCount(string text)
    {
        return (double)GetWordCount(text) / GetLetterCount(text);
    }
    
    public static void stringAnalyzer ()
    {
        string text = "Hello, World!";
        
        int letters = GetLetterCount(text);
        int wordCount = GetWordCount(text);
        int vocals = GetVocalCount();
        double avgWordCount = GetAvgWordCount(text);
        string newText = text.ToUpper();
    }
}