import java.util.ArrayList;
import java.util.Scanner;

public class Ex51_LawnMainInheritance {

    public static int lastID = 100;
    public static ArrayList<Ex51_LawnClient> allClients = new ArrayList();

    public static void main(String[] args) {

        allClients.add(new Ex51_LawnClient("Mr. Van Ginhoven", "Belgravia Road", 120, false));
        allClients.add(new Ex51_LawnClient("Mr. Couprie", "199 Street", 90, false));
        allClients.add(new Ex51_LawnClient("Mr. Caines", "74 Avenue", 80, true));
        allClients.add(new Ex51_PoolClient("Ms. Schroeder", "5 Maple", 90, false, 2));
        allClients.add(new Ex51_PoolClient("Mr. Irwin", "22 Main", 80, true, 1));

        while (true) {

            System.out.println("1. Print all Fees Owing");
            System.out.println("2. Mow Lawn");
            System.out.println("3. Process Fee Collected");
            System.out.println("4. Add new client");
            System.out.println("5. List Pool Clients");
            System.out.println("6. Exit");

            int choice;
            choice = Library.input.nextInt();
            Library.input.nextLine();

            if (choice == 1) {
                System.out.println("All clients Oweing fees");
                for (int i = 0; i < allClients.size(); i++) {
                    System.out.println(
                            allClients.get(i).getId() + "  " + allClients.get(i).getName() + " owes $"
                                    + allClients.get(i).getFees());
                }
                System.out.println();
                System.out.println();
            } else if (choice == 2) {
                System.out.println("Enter name of client");
                String name = Library.input.nextLine();
                int index = searchByName(allClients, name);
                allClients.get(index).calculateFee();

            } else if (choice == 3) {
                System.out.println("Enter name of client");
                String name = Library.input.nextLine();
                int index = searchByName(allClients, name);
                System.out.println("How much are they paying?");
                double payment = Library.input.nextDouble();
                Library.input.nextLine();
                allClients.get(index).processPayment(payment);
            } else if (choice == 4) {
                System.out.println("New Client - Not yet implemented.");

            } else if (choice == 5) {
                System.out.println("List of Pool Clients:");
                for (int i = 0; i < allClients.size(); i++) {
                    if (allClients.get(i) instanceof Ex51_PoolClient) {
                        System.out.println(allClients.get(i).getName());
                    }
                }

            } else {
                break;
            }
        } // end while loop

    }// end main

    public static int searchByName(ArrayList<Ex51_LawnClient> allClients, String n) {

        for (int i = 0; i < allClients.size(); i++) {
            if (allClients.get(i).getName().equalsIgnoreCase(n)) {
                return i;
            }

        }
        return -1;
    }

}// end LawnMain
