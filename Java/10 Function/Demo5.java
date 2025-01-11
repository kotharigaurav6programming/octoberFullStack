// example showing the concept of Function in java
class Demo5{
    void printData(){
        System.out.println("This is an example of printData");
        System.out.println("5 : default string representation : "+this);
        this.showData(); // this.showData();
    } 
    void showData(){
        System.out.println("This is an example of showData");
    } 
    public static void main(String args[]){
        Demo5 obj = new Demo5();
        obj.printData();
        System.out.println("14 : default string representation : "+obj);
    }
}