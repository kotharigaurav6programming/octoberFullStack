// program showing the concept of constructor

class Demo4{
    // constructor
    Demo4(){
        System.out.println("Default constructor called");
    }
    public static void main(String args[]){
 //       Demo4 obj = new Demo4(),obj1 = new Demo4(),obj2 = new Demo4();
         
          Demo4 obj;
          obj = new Demo4();
          obj = new Demo4();
          obj = new Demo4();
    }
}