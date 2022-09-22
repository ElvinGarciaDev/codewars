public class App {
    public static void main(String[] args) throws Exception {
        System.out.println(boolToWord(false));
    }

    public static String boolToWord(boolean b)
    {
      return b == true ? "Yes" : "No";
    }
}
