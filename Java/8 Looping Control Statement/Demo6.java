// 1    2   2   4   8   32  .....
import java.util.Scanner;
class Demo6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of terms : ");
        int num = sc.nextInt();
        // float a = 0.5f,b=2,c;
        double a = 0.5,b=2,c;
        for(int i=1;i<=num;i++){
            c = a*b;
            System.out.print((int)c+"\t");
            a = b;
            b = c;
        }
    }
}