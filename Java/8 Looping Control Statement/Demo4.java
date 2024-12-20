// program showing the concept of looping control statement | Factors of a number

import java.util.Scanner;
class Demo4{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        for(int i=1;i<=num;i++){
            if(num%i==0)
                System.out.print(i+"\t");
        }
    }
}