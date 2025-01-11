// program showing the concept of With Argument and With return type

import java.util.Scanner;
class Demo9{
    int addition(int a,int b){
        return a+b; // with return type 
    }
    public static void main(String args[]){
        Demo9 obj = new Demo9();

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number : ");
        int num2 = sc.nextInt();
  
        System.out.println("Result : "+obj.addition(num1,num2)); // with argument
    }
}
