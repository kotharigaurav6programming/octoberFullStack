// example showing the concept of threads 

class Demo3 extends Thread{
    public void run(){
        System.out.println("Current Thread : "+Thread.currentThread());
        System.out.println("Current Thread Name : "+Thread.currentThread().getName());
        System.out.println("Current Thread Priority : : "+Thread.currentThread().getPriority());
        System.out.println("Current Thread Id : "+Thread.currentThread().getId());
        System.out.println("Current Thread isAlive : "+Thread.currentThread().isAlive());
        System.out.println("Current Thread Daemon Thread status : "+Thread.currentThread().isDaemon());
        Thread.currentThread().setName("MyThread");
        System.out.println("Current Thread : "+Thread.currentThread());
    }
    public static void main(String args[]){
        Demo3 obj = new Demo3();
        obj.start();
    }
}