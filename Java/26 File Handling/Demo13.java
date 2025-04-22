// example showing the concept of file handling in java

import java.io.*;
class Demo13{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");

        try(FileWriter fw = new FileWriter(fobj);
        BufferedWriter bw = new BufferedWriter(fw)){
            bw.write("Statement1");
            bw.newLine();
            bw.write("Statement2");
            bw.newLine();
            bw.write("Statement3");
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

        try(FileReader fr = new FileReader(fobj);
        BufferedReader br = new BufferedReader(fr)){
            while(true){
                int x = br.read();
                if(x==-1)
                    break;
                System.out.print((char)x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

    }
}