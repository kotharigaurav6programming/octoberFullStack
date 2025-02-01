// example without varargs
/*
    varargs = var(variable) + args(arguments)
*/

class Demo4{
    void test(int a){
        System.out.println("a : "+a);
    }
    void test(int a,int b){
        System.out.println("a : "+a+"\tb : "+b);
    }
    void test(int a,int b,int c){
        System.out.println("a : "+a+"\tc : "+c+"\tb : "+c);
    }
    void test(int a,int b,int c,int d){
        System.out.println("a : "+a+"\tb : "+b+"\tc : "+c+"\td : "+d);
    }
    void test(int a,int b,int c,int d,int e){
        System.out.println("a : "+a+"\tb : "+b+"\tc : "+c+"\td : "+d+"\te : "+e);
    }
    public static void main(String args[]){
        Demo4 obj = new Demo4();
        obj.test(5);
        obj.test(6,7);
        obj.test(6,7,5);
        obj.test(6,7,6,8);
        obj.test(6,7,4,5,6);
    }
}