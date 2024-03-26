import java.util.ArrayList;
import java.io.*;

public class Ex22_ActorMain {

    public static void run() {

        ArrayList<Ex22_Actor> allActors = new ArrayList();
        // loadFile("data/Ex22_Actors.csv", allActors);
        allActors.add(new Ex22_Actor("Smith", true));
        allActors.add(new Ex22_Actor("Vetch", true));
        allActors.add(new Ex22_Actor("Robinson", false));
        allActors.add(new Ex22_Actor("Couprie", true));
        allActors.add(new Ex22_Actor("Chodin", false));
        allActors.add(new Ex22_Actor("Lee", false));

        for(int i=0; i<allActors.size(); i++){
        System.out.println( allActors.get(i) );
        }//print all

        // allActors.get(3).role = "Hamlet"; //causes an error due to role being private
        allActors.get(0).setRole("Ophelia");
        allActors.get(1).setRole("Hamlet (understudy)");
        allActors.get(2).setRole("The Ghost");
        allActors.get(3).setRole("Hamlet");
        allActors.get(4).setRole("Grave Digger");
        allActors.get(5).setRole("Horatio");

        allActors.get(0).addSales(200);
        allActors.get(2).addSales(100);
        allActors.get(1).addSales(150);
        allActors.get(0).addSales(75);

        for (int i = 0; i < allActors.size(); i++) {
            System.out.println(allActors.get(i));
        } // print all

        double totalSales = 0;
        for (int i = 0; i < allActors.size(); i++) {
            totalSales += allActors.get(i).getSales();
        }

        System.out.println("Total Ticket Sales: $" + totalSales);
        // saveFile("data/Ex22_Actors.csv", allActors);

    }// run

/*
  
    public static void loadFile(String filename, ArrayList<Ex22_Actor> list) {

        try {
            BufferedReader file = new BufferedReader(new FileReader(filename));

            String dataToRead;
            while (file.ready()) {
                dataToRead = file.readLine();

                String tempArray[] = dataToRead.split(",");

                list.add(new Ex22_Actor(tempArray[0], Boolean.parseBoolean(tempArray[1]), tempArray[2],
                        Double.parseDouble(tempArray[3])));

            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }// end loadFile

    public static void saveFile(String filename, ArrayList<Ex22_Actor> tempList) {
        try {
            PrintWriter file = new PrintWriter(new FileWriter(filename));

            for (int i = 0; i < tempList.size(); i++) {
                // the next lines are customized for whatever data you are getting.
                String toSave = "";
                toSave = tempList.get(i).name;
                toSave += "," + tempList.get(i).isPro;
                toSave += "," + tempList.get(i).role;
                toSave += "," + tempList.get(i).sales;


                // The above 6 lines could be replaced by a call to a carefully made toString()
                // function

                file.println(toSave);

            }
            file.close();
        } catch (IOException ex) {
            System.out.println(ex.toString());
        }

    }// end saveFile


  */
}// actorMain