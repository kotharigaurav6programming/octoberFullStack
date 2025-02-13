//program showing the concept of constructor

class Test{
    TestMain object;
    Test(TestMain obj){
        object = obj;
    }
    void showData(){
        System.out.println("Number : "+object.num);
    } 
}
class TestMain{
    int num=100;
    TestMain(){
        Test obj = new Test(this);
        obj.showData();
    }
}
class Demo12{
    public static void main(String args[]){
        new TestMain();
    }
}