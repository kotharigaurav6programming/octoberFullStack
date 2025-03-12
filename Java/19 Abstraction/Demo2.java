// example showing the concept of method overriding

class RBI{
    double rate(){
        return 1.0;
    }
}
class PNB extends RBI{
    double rate(){
        return 2.22;
    }
}
class BOI extends RBI{
    double rate(){
        return 3.2;
    }
}
class SBI extends RBI{}

class Demo2{
    public static void main(String args[]){
        RBI obj;
        obj = new BOI();
        System.out.println("Rate given by BOI : "+obj.rate());

        obj = new SBI();
        System.out.println("Rate given by SBI : "+obj.rate());

        obj = new PNB();
        System.out.println("Rate given by PNB : "+obj.rate());

    }
}