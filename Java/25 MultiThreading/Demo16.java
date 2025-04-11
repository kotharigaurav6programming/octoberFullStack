// example showing the concept of Thread synchronization - synchronized method 

class First{
    /* shared resources */ 
    synchronized void display(String name){
        System.out.print(" [ ");
        try{Thread.sleep(1000);}catch(InterruptedException e){}
        System.out.print(name);
        try{Thread.sleep(1000);}catch(InterruptedException e){}
        System.out.println(" ] ");
    }
}
class Second extends Thread{
    First fobj;
    String name;
    Second(First fobj,String name){
        this.fobj = fobj;
        this.name = name;
        start();
    }
    public void run(){
        fobj.display(name);        
    }
}
class Demo16{
    public static void main(String args[]){
        First fobj = new First();
        Second s1 = new Second(fobj,"Andrew");
        Second s2 = new Second(fobj,"Peter");
        Second s3 = new Second(fobj,"Mathew");
    }
}