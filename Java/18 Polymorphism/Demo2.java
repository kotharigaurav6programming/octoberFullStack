// program showing the concept of method overloading
// compile time polymorphism

class Demo2{
    void greater(int a,int b){
        int res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    void greater(double a,double b){
        double res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    public static void main(String args[]){
        Demo2 obj = new Demo2();
        obj.greater(34,45);
        obj.greater(4.5,5.6);
    }
}