// example showing the concept of threads 

class Demo9 extends Thread{
    public void run(){
       System.out.println("Name : "+Thread.currentThread().getName()+" Priority : "+Thread.currentThread().getPriority());
    }
    public static void main(String args[]){
       Demo9 obj1 = new Demo9();
       Demo9 obj2 = new Demo9();
       Demo9 obj3 = new Demo9();

       obj1.setName("MyThread1");
       obj1.setPriority(Thread.MAX_PRIORITY);
       obj2.setName("MyThread2");
       obj2.setPriority(Thread.NORM_PRIORITY);
       obj3.setName("MyThread3");
       obj3.setPriority(Thread.MIN_PRIORITY);
       
       obj1.start();
       obj2.start();
       obj3.start();
       
    }
}