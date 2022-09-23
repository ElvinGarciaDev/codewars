public class App {
    public static void main(String[] args) throws Exception {
        System.out.println(sum(new int[]{1,2,3,4,5}));
    }


    public static int sum(int[] arr){
        int sum = 0;
        for(int i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i];
            }
        }
        return sum;
      }
}


/*
 * You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 * 
 */