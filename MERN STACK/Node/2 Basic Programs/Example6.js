// Example showing the concept of Prototype

function Bank(actHolder,actNumber,balance){
    this.actHolder = actHolder;
    this.actNumber = actNumber;
    this.balance = balance;
}
Bank.prototype.showDetails = function(){
    console.log("Account Holder Name : "+this.actHolder);
    console.log("Account Number : "+this.actNumber);
    console.log("Balance : "+this.balance);    
}
Bank.prototype.deposit = function(damt){
    this.balance += damt;
}
Bank.prototype.withDraw = function(wamt){
    if(wamt>this.balance){
        console.log("Insufficient Balance");
    }else{
        console.log("Withdrawal amount : "+wamt);
        console.log("Remaining Balance : "+(this.balance-wamt));
    }
}
const bank = new Bank("Andrew Anderson","SBI-11000021",50000);
bank.showDetails();
bank.deposit(20000);
bank.withDraw(5000);
