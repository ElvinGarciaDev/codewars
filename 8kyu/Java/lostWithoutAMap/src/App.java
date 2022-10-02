public class App {
    public static void main(String[] args) throws Exception {
        int[] intArray = {10,20,30,40,50,60,70,80};

        int[] test = map(intArray); // Call map and double the numbers
        for(int i = 0; i < test.length; i++) {
            System.out.println(test[i]);
        }
    }

    public static int[] map(int[] arr) {

        int[] myArray = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            myArray[i] = (arr[i] * 2);
        }

        return myArray;

    }
}

/*
 * Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

 * 
 */