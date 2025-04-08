// example showing the concept of threads 

class Demo2{
    void display(){
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
        Demo2 obj = new Demo2();
        obj.display();
    }
}