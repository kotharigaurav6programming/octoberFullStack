import java.util.Scanner;
public class Demo4 
{
    public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          System.out.println("Enter string again :" );
          String str = sc.nextLine();
          
          String arr[] = str.split(" ");
          for(int i=0;i<arr.length/2;i++){
              String word = arr[i];
              arr[i] = arr[arr.length-1-i];
              arr[arr.length-1-i] = word;
          }
          str = " ";
          for(int i=0;i<arr.length;i++){
              str+= ' '+arr[i];
          }
          System.out.println("Reverse : "+str);
                  
    }
}


/*
    hello user how

    olleh resu woh
*/

