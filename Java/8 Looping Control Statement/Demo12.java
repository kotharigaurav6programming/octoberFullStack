//2     4       6       8       ..... 20
import java.util.Scanner;
class Demo12{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int n = sc.nextInt();
        int m = sc.nextInt();
        
        for(int i=n;i<=m;i++){
            if(i%2==0)
                System.out.print(i+"\t");
        }
    }
}