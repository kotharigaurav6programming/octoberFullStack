// example showing the concept of threads 

class Demo7 extends Thread{
    public void run(){
        for(int i=1;i<=10;i++){
            System.out.println("i : "+i);
            try{Thread.sleep(1000);}catch(InterruptedException e){}
        }
    }
    public static void main(String args[]){
        Demo7 obj1 = new Demo7();
        Demo7 obj2 = new Demo7();
        obj1.start();
//        try{obj1.join();}catch(InterruptedException e){}
          try{obj1.join(4000);}catch(InterruptedException e){}
        obj2.start();
    }
}