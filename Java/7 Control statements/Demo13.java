// Program to find out Grade

import java.util.Scanner;
class Demo13{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter character : ");
        char ch = sc.next().charAt(0);           

        if(ch>=65 && ch<=90)
            System.out.println("UpperCase");      
        else{
            if(ch>='a' && ch<='z')
                System.out.println("LowerCase");
            else{
                if(ch>=48 && ch<='9')
                    System.out.println("Its a Digit");
                else
                    System.out.println("Invalid");
            }
        }
    }
}