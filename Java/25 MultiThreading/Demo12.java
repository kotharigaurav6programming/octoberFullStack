// example showing the concept of threads 
class Demo12 implements Runnable{
    public void run(){
        System.out.println("Current Thread : "+Thread.currentThread());
    }
    public static void main(String args[]){
    //    Demo12 obj = new Demo12();       
    //    Thread th = new Thread(obj);
    //    th.start();

    //    Thread th = new Thread(new Demo12());
    //    th.start();
       
          new Thread(new Demo12()).start();
    }
}