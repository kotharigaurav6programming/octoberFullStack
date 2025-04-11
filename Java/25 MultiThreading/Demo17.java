// example showing the concept of Thread synchronization - static synchronization 

class First{
    /* shared resources */ 
        synchronized static void display(String name){
        System.out.print(" [ ");
        try{Thread.sleep(1000);}catch(InterruptedException e){}
        System.out.print(name);
        try{Thread.sleep(1000);}catch(InterruptedException e){}
        System.out.println(" ] ");
    }
}
class Second extends Thread{
    String name;
    Second(String name){
        this.name = name;
        start();
    }
    public void run(){
        First.display(name);        
    }
}
class Demo17{
    public static void main(String args[]){
        Second s1 = new Second("Andrew");
        Second s2 = new Second("Peter");
        Second s3 = new Second("Mathew");
    }
}