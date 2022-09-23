import java.io.*;
import java.util.*;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }


        public static String noSpace(final String x) {
              String str = x.replaceAll("\\s", "");
          return str;
    
        }
}


//Simple, remove the spaces from the string, then return the resultant string.
