// program showing the concept of instanceof operator
/*
    instanceof operator simply represents, whether the reference variable is containing the given type of object reference or not.
*/
class Test{}
class Parent extends Test{}
class Demo18{
    public static void main(String args[]){
        Parent p1 = new Parent();
        if(p1 instanceof Parent)
            System.out.println("instance of");
        else
            System.out.println("not instance of");

        if(p1 instanceof Test)
            System.out.println("instance of");
        else
            System.out.println("not instance of");
        
        Test p2 = new Parent();
        if(p2 instanceof Parent)
            System.out.println("instance of");
        else
            System.out.println("not instance of");

        Test p3 = new Test();
        if(p3 instanceof Test)
            System.out.println("instance of");
        else
            System.out.println("not instance of");

        Test p4 = new Test();
        if(p4 instanceof Parent)
            System.out.println("instance of");
        else
            System.out.println("not instance of");

        Test p5 = null;
        if(p5 instanceof Test)
            System.out.println("instance of");
        else
            System.out.println("not instance of");

    }
}
