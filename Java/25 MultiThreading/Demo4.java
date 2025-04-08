// example showing the concept of threads 

class Demo4 extends Thread{
    public void run(){
        System.out.println("Current Thread Name : "+Thread.currentThread().getName());
    }
    public static void main(String args[]){
        Demo4 obj1 = new Demo4();
        Demo4 obj2 = new Demo4();
        Demo4 obj3 = new Demo4();
        obj1.start();
            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println("Exception : "+e);
            }
        obj2.start();
            try{
                Thread.sleep(1000);
            }catch(InterruptedException e){
                System.out.println("Exception : "+e);
            }
        obj3.start();
    }
}