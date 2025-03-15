// Anonymous class

class Demo12{
    void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        // creation of anonymous class
        new Demo12(){
            void display(){
                System.out.println("display method called inside anonymous class");
            }  
        }.display();
    }
}