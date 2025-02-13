//program showing the concept of constructor
class TestMain{
    String name="Andrew";
    TestMain getInstance(){
        name="Mathew";
        return this;    
    }   
    void printData(){
        System.out.println("TestMain class executes..!!");
    }
}
class Demo14{
    public static void main(String args[]){
        TestMain obj = new TestMain();
        System.out.println("name : "+obj.name);
        TestMain object = obj.getInstance();
        System.out.println("name : "+obj.name);
        System.out.println("name : "+object.name);
        object.printData();
    }
}