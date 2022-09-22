public class App {
    public static void main(String[] args) throws Exception {
        String str = numberToString(5);

        System.out.println(str);
    }

    // Functions turns number into a String
    public static String numberToString(int num) {
        return Integer.toString(num);
    }
}