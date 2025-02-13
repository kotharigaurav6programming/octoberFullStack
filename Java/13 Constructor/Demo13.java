//program showing the concept of constructor

class TestMain{
    TestMain getInstance(){
        return this;    
    }   
    void printData(){
        System.out.println("TestMain class executes..!!");
    }
}
class Demo13{
    public static void main(String args[]){
        TestMain obj = new TestMain();
        TestMain object = obj.getInstance();
        object.printData();
    }
}