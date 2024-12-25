// program to find out perfect numbers between two entered numbers
import java.util.Scanner;
class Demo14{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial limit : ");
        int n = sc.nextInt();
        System.out.println("Enter final limit : ");
        int m = sc.nextInt();
        for(int j=n;j<=m;j++){
            int sum=0;
            for(int i=1;i<=j/2;i++){
                if(j%i==0)
                    sum = sum + i;
            }
            if(sum==j)
                System.out.print(j+"\t");
        }
    }
}