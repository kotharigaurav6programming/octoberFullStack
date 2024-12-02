// program to take values from user

import java.util.Scanner;
class Demo2{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();

        System.out.println("Enter second number : ");
        int num2 = sc.nextInt();

        System.out.println("Result : "+num1+num2);
        System.out.println("Result : "+(num1+num2));
        System.out.println(num1+num2+" : Sum");
        System.out.println(num1+num2); 
    }
}