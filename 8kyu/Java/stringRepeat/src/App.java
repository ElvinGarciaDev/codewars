public class App {
    public static void main(String[] args) throws Exception {
        System.out.println(repeatStr(5, "e"));
    }

    public static String repeatStr(final int repeat, final String string) {
        String text = "";
        
        for (int i = 0; i < repeat; i++) {
            text += string;
        }

        return text;
    }
}
