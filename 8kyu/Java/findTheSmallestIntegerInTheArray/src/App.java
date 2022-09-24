public class App {
    public static void main(String[] args) throws Exception {
        int arr[] = {78,56,232,12,11,43};
        System.out.println(findSmallestInt(arr));

    }

    public static int findSmallestInt(int[] args) {
        int smallest = args[0]; // Set the first element to the smallest

        for (int i = 1; i < args.length; i++) {
            if (args[i] < smallest) {
                smallest = args[i];
            }
        }

        return smallest;
    }
}
