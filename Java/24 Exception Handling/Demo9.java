// program showing the concept of exception handling

class Demo9{
    static String name;        //       args[0]  args[1] args[2] args[3]args[4] args[5]
    public static void main(String args[]){ //Hello    1     3.4   true    4    3
       int valid=0,invalid=0;
       for(int i=0;i<args.length;i++){
            try{
                Integer.parseInt(args[i]);
                valid++;
            }catch(NumberFormatException e){
                invalid++;
            }
       }
       System.out.println("Valid : "+valid+"\nInvalid : "+invalid);
    }
}