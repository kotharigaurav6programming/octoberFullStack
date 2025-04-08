// example showing the concept of threads 

class Demo6 extends Thread{
    public void run(){
        for(int i=1;i<=10;i++){
            System.out.println("i : "+i);
            try{Thread.sleep(1000);}catch(InterruptedException e){}
        }
    }
    public static void main(String args[]){
        Demo6 obj1 = new Demo6();
        Demo6 obj2 = new Demo6();
        obj1.start();
        try{Thread.sleep(5000);}catch(InterruptedException e){}
        obj2.start();
    }
}