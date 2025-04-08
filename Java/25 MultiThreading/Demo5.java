// example showing the concept of threads 

class Demo5 extends Thread{
    public void run(){
        for(int i=1;i<=10;i++){
            System.out.println("i : "+i);
            try{Thread.sleep(1000);}catch(InterruptedException e){}
        }
    }
    public static void main(String args[]){
        Demo5 obj1 = new Demo5();
        obj1.start();
    }
}