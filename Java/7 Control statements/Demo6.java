// Program showing the concept of if else statement

import java.util.Scanner;
class Demo6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();
        
        System.out.println("Enter second number : ");
        int num2 = sc.nextInt();
        
        if(num1>num2){
            System.out.println(num1+" is greater..");
        }else{
            System.out.println(num2+" is greater....");
        }
    }
}