// program showing the concept of user defined exception
import java.util.Scanner;
class InsufficientBalanceException extends Exception{
    InsufficientBalanceException(String msg){
        super(msg);
    }
}
class WithDraw{
    int bal;
    WithDraw(int bal){
        this.bal=bal;
    }
    void withDrawAmt() throws InsufficientBalanceException{
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Withdraw amount : ");
        int wamt = sc.nextInt();
        if(wamt>bal)
            throw new InsufficientBalanceException("Low Balance");
        else{
            System.out.println("Balance : "+bal);
            System.out.println("Withdrawal amount : "+wamt);
            System.out.println("Remaining Balance : "+(bal-wamt));
        }
    }
}
class Demo14{
    public static void main(String...args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Balance : ");
        int bal = sc.nextInt();
        WithDraw obj = new WithDraw(bal);
        try{
            obj.withDrawAmt();
        }catch(InsufficientBalanceException e){
            System.out.println("Exception : "+e.getMessage());
        }
    }
}
