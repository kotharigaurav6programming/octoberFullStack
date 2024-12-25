// program to check whether entered number is palindrome or not
/*
    121----reverse--------> 121 Palindrome
    123----reverse--------> 321 Not palindrome
*/
import java.util.Scanner;
class Demo17{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        int temp = num;
        int rev=0;
        while(num>0){
            rev = rev*10+num%10;
            num = num/10;
        }
        if(temp==rev)
            System.out.println("Number is palindrome");
        else
            System.out.println("Number is not palindrome");
    }
}