// example showing the concept of Inter thread communication
// co-operation of thread

class Customer{
    int bal;
    Customer(int bal){
        this.bal=bal;
    }
    synchronized void withDraw(int wamt){
        if(wamt>bal){
            try{
                System.out.println("Low Balance ..!!");
                wait();
            }catch(InterruptedException e){
                System.out.println("Exception : "+e);
            }
        }
            System.out.println("Balance : "+bal);
            System.out.println("Withdrawal amount : "+wamt);
            System.out.println("Remaining Balance : "+(bal-wamt));
    }
    synchronized void deposite(int amt){
        System.out.println("Going to deposite ..!!");
        bal += amt;
        System.out.println("Amount deposited ..!!");
        notify();
    }
}
class Demo18{
    public static void main(String args[]){
        int balance = 1000;
        int wamt = 1200;
        Customer cobj = new Customer(balance);
        new Thread(){
            @Override
            public void run(){
                cobj.withDraw(wamt);
            }
        }.start();
        if(wamt>balance){
            new Thread(){
                @Override
                public void run(){
                    cobj.deposite(1500);
                }
            }.start();
        }
    }
}