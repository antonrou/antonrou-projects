import java.util.ArrayList;

class Ex9_ClassLists{
    public static void run(){

        ArrayList <String> sem2 = new ArrayList();
        ArrayList <Double> blockNum = new ArrayList();
        ArrayList <Integer> numLeft = new ArrayList();
        
        System.out.println("My Timetable");
        sem2.add("CS20AP");    blockNum.add(1.1);  numLeft.add(4);
        sem2.add("Computer Science 30");    blockNum.add(1.2);  numLeft.add(7);
        sem2.add("Spare");    blockNum.add(1.3);  numLeft.add(7);
        sem2.add("CS20AP");    blockNum.add(1.4);  numLeft.add(4);
        sem2.add("CS30AP");    blockNum.add(2.1);  numLeft.add(3);
        sem2.add("CS30");    blockNum.add(2.2);  numLeft.add(7);
        sem2.add("Spare");    blockNum.add(2.3);  numLeft.add(7);
        sem2.add("CS10");    blockNum.add(2.4);  numLeft.add(4);
        
        for(int i=0; i<sem2.size(); i++){
            // System.out.println( blockNum.get(i) + "   " + sem2.get(i) + "   " + numLeft.get(i));

            System.out.printf(  "%-6s", blockNum.get(i)   );
            System.out.printf( "%-23s", sem2.get(i)  );
            System.out.printf( "%-5s %n", numLeft.get(i)     );         
        }

        // Searching
        System.out.println("What course do you want to find?");
        String courseToFind = Library.input.nextLine();
        
        int foundIndex = Search.linearStringSearch( sem2, courseToFind   );           
        if (foundIndex == -1) {
            System.out.println("Not found");
        } else {
            System.out.println( sem2.get(foundIndex) + "  Classes left: " + numLeft.get(foundIndex)  );
        }


        //Change Computer Science to a spare       
        sem2.set(1, "Spare");
        sem2.set(5, "Spare");

        //remove a course
        sem2.remove(3);
        blockNum.remove(3);
        numLeft.remove(3);

        //update by subtracting one class
        for(int i=0; i<numLeft.size(); i++){
            numLeft.set(i,  numLeft.get(i) - 1  );                   
        }

        
        for(int i=0; i<sem2.size(); i++){
            // System.out.println( blockNum.get(i) + "   " + sem2.get(i) + "   " + numLeft.get(i));

            System.out.printf(  "%-6s", blockNum.get(i)   );
            System.out.printf( "%-23s", sem2.get(i)  );
            System.out.printf( "%-5s %n", numLeft.get(i)     );         
        }
        
    }//run

    
}//class