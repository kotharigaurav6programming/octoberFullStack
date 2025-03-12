// example showing the concept of abstract class | Abstraction
import java.util.Scanner;
abstract class RBI{
    RBI(){
        System.out.println("--Welcome To Bank--");
    }
    abstract double rate();
    double finalSum(double rate,int balance){
        return balance + balance*rate/100;
    }
}
class PNB extends RBI{
    double rate(){
        return 2.22;
    }
}
class BOI extends RBI{
    double rate(){
        return 3.2;
    }
}
class SBI extends RBI{
    double rate(){
        return 3.2;
    }
}

class Demo6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter balance : ");
        int balance = sc.nextInt();
        RBI obj;
        obj = new BOI();
        System.out.println("Rate given by BOI : "+obj.rate());
        System.out.println("Final sum by BOI : "+obj.finalSum(obj.rate(),balance));

        obj = new SBI();
        System.out.println("Rate given by SBI : "+obj.rate());
        System.out.println("Final sum by SBI : "+obj.finalSum(obj.rate(),balance));

        obj = new PNB();
        System.out.println("Rate given by PNB : "+obj.rate());
        System.out.println("Final sum by PNB : "+obj.finalSum(obj.rate(),balance));

    }
}