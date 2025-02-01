// example showing the concept of command line argument

class Demo3{
    public static void main(String args[]){
        for(String str : args){
            System.out.print(str+"\t");
        }
        System.out.println();
        String temp;
        for(int i=0;i<args.length/2;i++){
            temp = args[i];
            args[i] = args[args.length-1-i];
            args[args.length-1-i] = temp;
        }
        System.out.println("In Reverse Oredr : ");
        for(String str : args){
            System.out.print(str+"\t");
        }
    }
}