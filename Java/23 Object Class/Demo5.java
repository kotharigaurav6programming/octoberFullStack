// example showing the concept of getClass() method

class Demo5{
    public static void main(String args[]){
        Object obj = new String();
        Class c = obj.getClass();
        System.out.println("Name : "+c.getName());

        Demo5 obj1 = new Demo5();
        Class c1 = obj1.getClass();
        System.out.println("Name : "+c1.getName());
    }
}