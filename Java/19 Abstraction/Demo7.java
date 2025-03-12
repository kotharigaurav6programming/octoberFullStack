// example showing the concept of abstract class | Abstraction
import java.util.Scanner;
abstract class Series{
    abstract void series(int n,int m);
}
class EvenClass extends Series{
    void series(int n,int m){
        System.out.println("Even number series : ");
        for(int i=n;i<=m;i++){
            if(i%2==0)
                System.out.print(i+"\t");
        }
    }
}
class OddClass extends Series{
    void series(int n,int m){
        System.out.println("\nOdd number series : ");
        for(int i=n;i<=m;i++){
            if(i%2!=0)
                System.out.print(i+"\t");
        }
    }
}

class Demo7{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final value : ");
        int n = sc.nextInt();
        int m = sc.nextInt();
        Series obj;
        obj = new EvenClass();
        obj.series(n,m);
        obj = new OddClass();
        obj.series(n,m);
    }
}