// program showing the concept of With Argument and No return type

import java.util.Scanner;
class Demo7{
    void addition(int num1,int b){
        System.out.println("Addition : "+(num1+b));
        // no return type because return statement is missing
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number : ");
        int num2 = sc.nextInt();

        Demo7 obj = new Demo7();
        obj.addition(num1,num2); // with argument
    }
}
