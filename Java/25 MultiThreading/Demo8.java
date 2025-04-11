// example showing the concept of threads 

class Demo8 extends Thread{
    public void run(){
       System.out.println("Name : "+Thread.currentThread().getName());
    }
    public static void main(String args[]){
       Demo8 obj1 = new Demo8();
       Demo8 obj2 = new Demo8();
       Demo8 obj3 = new Demo8();

       obj1.setName("MyThread1");
       obj2.setName("MyThread2");
       obj3.setName("MyThread3");
       
       obj1.start();
       obj2.start();
       obj3.start();
       
    }
}