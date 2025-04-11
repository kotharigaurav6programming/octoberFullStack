// example showing the concept of threads 

class Demo10 extends Thread{
    public void run(){
       System.out.println("Name : "+Thread.currentThread().getName()+" isAlive : "+Thread.currentThread().isAlive());
    }
    public static void main(String args[]){
       Demo10 obj1 = new Demo10();
       Demo10 obj2 = new Demo10();
       Demo10 obj3 = new Demo10();       
       obj1.start();
       obj2.start();
       obj3.start();
       try{Thread.sleep(1000);}catch(InterruptedException e){}
       System.out.println("obj1 : "+obj1.isAlive());
       System.out.println("obj2 : "+obj2.isAlive());
       System.out.println("obj3 : "+obj3.isAlive());
    }
}