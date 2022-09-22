public class App {
    public static void main(String[] args) throws Exception {
        System.out.println(boolToWord(false));
    }

    public static String boolToWord(boolean b)
    {
      return b == true ? "Yes" : "No";
    }
}


/*
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 * 
 */