// Program to swap two numbers without using third variable

import java.util.Scanner;
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Before swapping : \na : "+a+"\nb : "+b);
        a = a^b; //  a = a*b;   // a = a+b;
        b = a^b; //  b = a/b;   // b = a-b;
        a = a^b; //  a = a/b;   // a = a-b;    
        System.out.println("After swapping : \na : "+a+"\nb : "+b);
    }
}