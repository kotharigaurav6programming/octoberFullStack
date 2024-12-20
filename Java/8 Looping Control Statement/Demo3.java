// program showing the concept of looping control statement | Factorial of a number

import java.util.Scanner;
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        int fact=1;
        for(int i=1;i<=num;i++){
            fact = fact*i;
        }
        System.out.println("Factorial = "+fact);        
    }
}