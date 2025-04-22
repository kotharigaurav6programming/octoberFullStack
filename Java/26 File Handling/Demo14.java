// example showing the concept of file handling in java

import java.io.*;
class Demo14{
    public static void main(String args[]){
        try{
       InputStreamReader isr = new InputStreamReader(System.in);
       BufferedReader br = new BufferedReader(isr);

       System.out.println("Enter name : ");
       String name = br.readLine();

       System.out.println("Enter age : ");
       String age = br.readLine();

        System.out.println("Name : "+name+"\nAge : "+age);

        }catch(IOException e){
            System.out.println(e);
        }
    }
}