// example showing the concept of switch control statement

import java.util.Scanner;
class Demo17{
    public static void main(String args[]){
        int i = 1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();

        switch(i++){
            case -3 : num++;
            case 4 : ++num;
                        break;
            case 0 : num++;
            case 1 : --num;
            case -2 : --num;
            default : 
                System.out.println("Number : "+num++);
        }
    }
}