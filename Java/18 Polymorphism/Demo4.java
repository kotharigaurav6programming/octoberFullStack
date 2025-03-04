// program showing the concept of method overloading
// compile time polymorphism

class Demo4{
    static void greater(int a,double b){
        double res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    static void greater(double a,int b){
        double res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    public static void main(String args[]){
        greater(3,4.5);
        greater(4.5,56);
    }
}