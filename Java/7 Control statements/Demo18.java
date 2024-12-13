// example showing the concept of switch control statement

import java.util.Scanner;
class Demo18{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();

        switch(num){
            case 012 : 
                num += 100;
                break;
            case 0x12 : 
                num -= 100;
                break;
            default : 
                System.out.println("Invalid");
        }
        System.out.println("Result : "+num);
    }
}
/*
012 = octal number
1 x 8^1 + 2 x 8^0
10

0x12 = hexa decimal number
1 x 16^1 + 2 x 16^0
18
*/