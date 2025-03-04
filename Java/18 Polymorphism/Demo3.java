// program showing the concept of method overloading
// compile time polymorphism
// Constructor overloading

class Demo3{
    Demo3(int a,int b){
        int res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    Demo3(double a,double b){
        double res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    public static void main(String args[]){
        new Demo3(34,45);
        new Demo3(4.5,5.6);
    }
}