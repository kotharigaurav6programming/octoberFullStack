// example showing the concept of finalize() method

@Deprecated
class Demo6{
    @Override
    protected void finalize(){
        System.out.println("called before object is going to be garbage collected by garbage collector");
    }
    public static void main(String args[]){
        Demo6 obj = new Demo6();
        System.out.println("hashCode : "+obj.hashCode());

        obj = null;
        System.gc();
    }
}