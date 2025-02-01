// example showing the concept of command line argument

class Demo2{
    public static void main(String args[]){
        // System.out.println("Length : "+args.length);
        for(String str : args){
            System.out.print(str+"\t");
        }
        int sum=0;
        for(int i=0;i<args.length;i++){
            sum = sum + Integer.parseInt(args[i]);
        }
        System.out.println("Sum : "+sum);
    }
}