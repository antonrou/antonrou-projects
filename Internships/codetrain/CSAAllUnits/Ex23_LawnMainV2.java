import java.util.ArrayList;
import java.io.*;

class Ex23_LawnMainV2 {
    public static void run() {
        ArrayList<Ex23_LawnClient> allClients = new ArrayList();

        // allClients.add(new Ex23_LawnClient("Mr. Couprie", "666 Maple Lane", 20,
        // false));
        // allClients.add(new Ex23_LawnClient("Grogu", "444 Galaxy far far away", 10,
        // true));
        // allClients.add(new Ex23_LawnClient("Luke", "35 Tatoinne Drive", 100, false));
        // allClients.add(new Ex23_LawnClient("Queen Amidala", "5 Naboo Street", 200,
        // true));

        loadFile("lawn.csv", allClients);

        while (true) {
            System.out.println();
            System.out.println("What would you like to do?");
            System.out.println("1.  Print all addresses");
            System.out.println("2.  Mow all lawns");
            System.out.println("3.  Recieve Payment");
            System.out.println("4.  Add new client");
            System.out.println("5.  Delinquent Payments");
            System.out.println("6.  Save and Exit");

            int choice = Library.input.nextInt();
            Library.input.nextLine();
            if (choice == 1) {
                printAllClients(allClients);
            } else if (choice == 2) {
                for (int i = 0; i < allClients.size(); i++) {
                    allClients.get(i).mowLawn();
                }

            } else if (choice == 3) {

                System.out.println("Which name is making a payment");
                String add = Library.input.nextLine();

                int foundIndex = searchByName(allClients, add);
                if (foundIndex == -1) {
                    System.out.println("Name not found");

                } else {
                    allClients.get(foundIndex).processPayment();
                }

            } else if (choice == 4) {
                System.out.println("What is the new client's name?");
                String newname = Library.input.nextLine();
                System.out.println("What is the address?");
                String newAddress = Library.input.nextLine();
                System.out.println("What is the yard size in square meters?");
                int newSize = Library.input.nextInt();
                Library.input.nextLine();
                System.out.println("Do they have a dog?");
                String dogtemp = Library.input.nextLine();
                boolean newDog = dogtemp.startsWith("y"); // converts answer to boolean

                allClients.add(new Ex23_LawnClient(newname, newAddress, newSize, newDog));

            } else if (choice == 5) {

                for (int i = 0; i < allClients.size(); i++) {
                    allClients.get(i).delinquentFees();
                }

            } else {

                saveFile("lawn.csv", allClients);
                
                break;

            }
        } // while

    }// run

    public static void printAllClients(ArrayList<Ex23_LawnClient> list) {
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i).address + "  Owner: " + list.get(i).name + "  Currently owing: $"
                    + list.get(i).outstandingFees);
        }
    }// printAllClients

    public static int searchByName(ArrayList<Ex23_LawnClient> list, String searchTerm) {
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).name.equalsIgnoreCase(searchTerm)) {
                return i;
            }
        }
        return -1;
    }// end search

    public static void loadFile(String filename, ArrayList<Ex23_LawnClient> list) {

        try {
            BufferedReader file = new BufferedReader(new FileReader(filename));

            String dataToRead;
            while (file.ready()) {
                dataToRead = file.readLine();

                String tempArray[] = dataToRead.split(",");
                // the next line is customized for whatever class you are creating.
                // Here we create a new STUDENT so there are 5 variables
                // Unfortunately, you need to Parse any variable that is not a String. Integers,
                // doubles and booleans are all demonstrated below.
                list.add(new Ex23_LawnClient(tempArray[0], tempArray[1], Integer.parseInt(tempArray[2]),
                        Boolean.parseBoolean(tempArray[3]), Double.parseDouble(tempArray[4])));

            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }// end loadFile

    public static void saveFile(String filename, ArrayList<Ex23_LawnClient> tempList) {
        try {
            PrintWriter file = new PrintWriter(new FileWriter(filename));

            for (int i = 0; i < tempList.size(); i++) {
                // the next lines are customized for whatever data you are getting.
                String toSave = "";
                toSave = tempList.get(i).name;
                toSave += "," + tempList.get(i).address;
                toSave += "," + tempList.get(i).lawnSize;
                toSave += "," + tempList.get(i).hasDog;
                toSave += "," + tempList.get(i).outstandingFees;

                // The above 6 lines could be replaced by a call to a carefully made toString()
                // function

                file.println(toSave);

            }
            file.close();
        } catch (IOException ex) {
            System.out.println(ex.toString());
        }

    }// end saveFile

}// class