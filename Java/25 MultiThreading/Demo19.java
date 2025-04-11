// example showing the concept of deadlock

/*
    DeadLock : DeadLock is the situation where no progress is going to be made. which means dead end. Lets consider a scenerio where there are 2 threads, Thread 1 and Thread 2, and each thread consumes some resources like Thread 1 have resource R1 and Thread 2 have Resource R2, now thread 1 needs resource R2 and Thread 2 needs Resource R1, so in such a situation none of the condition is going to be satisfied which results in deadend.

             uses                             needs
              _________|<-- Thread 1 --|_________
             |                                  |
          Resource R1                    Resource R2
             |_________               __________|
                       |-- Thread 2 -->|
            needs                             uses
*/ 

class Pen{}
class Paper{}
class Demo19{
    public static void main(String args[]){
        Pen pn = new Pen();
        Paper pr = new Paper();
        new Thread(){
            @Override
            public void run(){
                synchronized(pn){
                    System.out.println("Thread 1 uses pen and needs paper");
                
                try{Thread.sleep(1000);}catch(InterruptedException e){}
                synchronized(pr){
                    System.out.println("Thread 1 uses paper and needs pen");
                }
                }
            }
        }.start();

        new Thread(){
            @Override
            public void run(){
                synchronized(pr){
                    System.out.println("Thread 2 uses paper and needs pen");
                
                try{Thread.sleep(1000);}catch(InterruptedException e){}
                synchronized(pn){
                    System.out.println("Thread 2 uses pen and needs paper");
                }
                }
            }
        }.start();

    }
}