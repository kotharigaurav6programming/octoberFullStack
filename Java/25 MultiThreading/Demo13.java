// example showing the concept of threads 
class Demo13 {
    public static void main(String args[]){
        /*
        Runnable obj = new Runnable(){
            @Override
            public void run(){
                 System.out.println("Current Thread : "+Thread.currentThread());
            }
        };
        Thread th = new Thread(obj);
        th.start();
        */

        /*
        Thread th = new Thread(new Runnable(){
            @Override
            public void run(){
                 System.out.println("Current Thread : "+Thread.currentThread());
            }
        });
        th.start();
        */
       
       /*
        Thread obj = new Thread(){
            @Override
            public void run(){
                 System.out.println("Current Thread : "+Thread.currentThread());
            }
        };
        obj.start();
        */
       
       /*
        new Thread(){
            @Override
            public void run(){
                 System.out.println("Current Thread : "+Thread.currentThread());
            }
        }.start();
        */
       
       /*
     Runnable obj = ()->System.out.println("Current Thread : "+Thread.currentThread());
        Thread th = new Thread(obj);
        th.start();
       */
      
      /*
        Thread th = new Thread(()->System.out.println("Current Thread : "+Thread.currentThread()));
        th.start();
        */
        
        new Thread(()->System.out.println("Current Thread : "+Thread.currentThread())).start();

    }
}