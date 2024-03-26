import java.util.ArrayList;

class Ex23_LawnMain {
    public static void run() {
        ArrayList<Ex23_LawnClient> allClients = new ArrayList();

        allClients.add(new Ex23_LawnClient("Mr. Couprie", "666 Maple Lane", 20, false));
        allClients.add(new Ex23_LawnClient("Grogu", "444 Galaxy far far away", 10, true));
        allClients.add(new Ex23_LawnClient("Luke", "35 Tatoinne Drive", 100, false));
        allClients.add(new Ex23_LawnClient("Queen Amidala", "5 Naboo Street", 200, true));

        printAllAddresses(allClients);

        System.out.println("Week 1 Billing");
        allClients.get(0).mowLawn();
        allClients.get(1).mowLawn();
        
        System.out.println();
        System.out.println("Week 3 Billing");
        for(int i=0; i<allClients.size(); i++){
            allClients.get(i).mowLawn();
        }
        

        printAllAddresses(allClients);


        

    }// run

    public static void printAllAddresses(ArrayList<Ex23_LawnClient> list) {
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i).address   );
        }
    }// printAllClients

}// class
