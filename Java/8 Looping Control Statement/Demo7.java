//2     4       6       8       ..... 20
import java.util.Scanner;
class Demo7{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of terms : ");
        int num = sc.nextInt();
        for(int i=1;i<=num;i++){
            System.out.print(2*i+"\t");
        }
    }
}