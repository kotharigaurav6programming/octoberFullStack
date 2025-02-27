// program showing the concept of inheritance (Multilevel Inheritance)
class Account{
    int actNo;
    String name;
    Account(int actNo,String name){
        this.actNo = actNo;
        this.name=name;
    }
    void getAccount(){
        System.out.println("Account Number : "+actNo);
        System.out.println("Account Holder Name : "+name);
    }
}
class Balance extends Account{
    int balance;
    Balance(int actNo,String name,int balance){
        super(actNo,name);
        this.balance = balance;
    }
    void getBalance(){
        getAccount();
        System.out.println("Balance : "+balance);
    }
}
class Transaction extends Balance{
    int wamt,damt;
    Transaction(int actNo,String name,int balance,int wamt,int damt){
        super(actNo,name,balance);
        this.wamt = wamt;
        this.damt = damt;
    }
    void getTransaction(){
        getBalance();
        System.out.println("Withdrawal amount : "+wamt);
        System.out.println("Deposit amount : "+damt);
        System.out.println("Account Balance : "+(balance-wamt+damt));
    }
}
class Demo7{
    public static void main(String args[]){
        Transaction obj = new Transaction(12345678,"Andrew Anderson",10000,1200,5000);
        obj.getTransaction();
    }
}