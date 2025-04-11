// example showing the concept of threads 

class Demo11 extends Thread{
    public void run(){
       System.out.println("Name : "+Thread.currentThread().getName()+" isDaemon : "+Thread.currentThread().isDaemon());
    }
    public static void main(String args[]){
       Demo11 obj1 = new Demo11();
       Demo11 obj2 = new Demo11();
       Demo11 obj3 = new Demo11();       
       obj1.setDaemon(true);
       obj2.setDaemon(false);
       obj3.setDaemon(true);
       obj1.start();
       obj2.start();
       obj3.start();
    }
}