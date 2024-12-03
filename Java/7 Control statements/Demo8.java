// Program showing the concept of nested if else statement

import java.util.Scanner;
class Demo8{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter Nationality : ");
        char ch = sc.next().charAt(0);
                
        if(ch=='I' || ch=='i'){
            System.out.println("Enter Age : ");
            int age = sc.nextInt();
            if(age>=18)
                System.out.println("Eligible to vote");
            else
                System.out.println("Not Eligible to vote");
        }
        else        
            System.out.println("Not an Indian");
    }
}