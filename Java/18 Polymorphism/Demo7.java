// program showing the concept of method overloading
// compile time polymorphism
// error in output
class Demo7{
    int demo(int a,int b){
        return a>b?a:b;
    }
    double demo(int a,int b){
        return a>b?a:b;
    }
    public static void main(String args[]){
        Demo7 obj = new Demo7();
        System.out.println("Greater number : "+obj.demo(10,21));
        System.out.println("Greater number : "+obj.demo(56,67));
    }
}