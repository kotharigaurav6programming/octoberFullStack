// example showing the concept of file handling in java

import java.io.*;
class Demo12{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");

        try(FileWriter fw = new FileWriter(fobj)){
            fw.write("Statement1\n");
            fw.write("Statement2\n");
            fw.write("Statement3\n");
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

        try(FileReader fr = new FileReader(fobj)){
            while(true){
                int x = fr.read();
                if(x==-1)
                    break;
                System.out.print((char)x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

    }
}