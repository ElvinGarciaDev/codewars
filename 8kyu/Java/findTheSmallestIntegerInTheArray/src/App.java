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


/*
 * 
 * Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */