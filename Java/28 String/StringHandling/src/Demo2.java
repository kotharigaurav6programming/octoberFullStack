import java.util.Scanner;
public class Demo2 
{
    public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          System.out.println("Enter age : ");
          int age = sc.nextInt();
          System.out.println("Age : "+age);
          
          sc.nextLine();
          System.out.println("Enter string :" );
          String str = sc.nextLine();
          
          System.out.println("Enter string again :" );
          String str1 = sc.nextLine();
         
          System.out.println("String : "+str);
          System.out.println("String : "+str1);

    }
}
