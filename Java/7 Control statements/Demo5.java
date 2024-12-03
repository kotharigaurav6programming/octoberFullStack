// Program showing the concept of if else statement

import java.util.Scanner;
class Demo5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter Salary : ");
        int sal = sc.nextInt();
        
        System.out.println("Enter exp : ");
        int exp = sc.nextInt();
        
        if(exp>=5 && sal>=20000){
            System.out.println("Gets Hike");
        }else{
            System.out.println("Do not gets Hike");
        }
    }
}