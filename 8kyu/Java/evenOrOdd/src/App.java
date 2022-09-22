public class App {
    public static void main(String[] args) throws Exception {
        System.out.println(even_or_odd(5));
    }

    // Function will return a String of value Odd or Even

    public static String even_or_odd(int number) {
        //Place code here
        if(number % 2 == 0) {
            return "Even";
        }else {
            return "Odd";
        }
    }
}
