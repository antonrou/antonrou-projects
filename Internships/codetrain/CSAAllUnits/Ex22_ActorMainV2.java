import java.util.ArrayList;

class Ex22_ActorMainV2 {
    public static void run() {
        ArrayList<Ex22_ActorV2> allActors = new ArrayList();

        allActors.add(new Ex22_ActorV2("Smith", true));
        allActors.add(new Ex22_ActorV2("Couprie", true));
        allActors.add(new Ex22_ActorV2("Robinson", false));
        allActors.add(new Ex22_ActorV2("Chodin", false));
        allActors.add(new Ex22_ActorV2("Lei", true));
        allActors.add(new Ex22_ActorV2("Kinasevich", false));

        allActors.get(0).setRole("Juliet");
        allActors.get(1).setRole("Romeo");
        allActors.get(2).setRole("Friar Lawrence");
        allActors.get(3).setRole("Mercutio");
        allActors.get(4).setRole("Lady Monague");
        allActors.get(5).setRole("Tybalt");

                // for (int i = 0; i < allActors.size(); i++) {
                //     System.out.println(allActors.get(i));
                // }
        
        while (true) {
            System.out.println();
            System.out.println("What would you like to do?");
            System.out.println("1.  Print all");
            System.out.println("2.  Add Sales");
            System.out.println("3.  Pay actors");
            System.out.println("4.  Exit");

            int choice = Library.input.nextInt();
            Library.input.nextLine();
            if (choice == 1) {
                for (int i = 0; i < allActors.size(); i++) {
                    System.out.println(allActors.get(i));
                }
            } else if (choice == 2) {
                
                System.out.println("Which actor is selling tickets?");
                String name = Library.input.nextLine();
                System.out.println("How many tickets did we sell?");
                int tix = Library.input.nextInt();
                Library.input.nextLine();

                int foundIndex = searchByName(allActors, name);
                if( foundIndex == -1){
                    System.out.println("Name not found");
                    
                } else {
                    allActors.get(foundIndex).sellTix(tix);                   
                }   
                
            } else if (choice == 3) {
                    double totalPay = 0;
                    for(int i=0; i<allActors.size(); i++){
                        
                       totalPay +=  allActors.get(i).pay();
                        
                    }
                    System.out.println("Total payroll: $" + totalPay);
                
            } else {
                break;

            }
        }//while

    }// run


    public static int searchByName(  ArrayList<Ex22_ActorV2> list, String searchTerm    ){
        for(int i=0;  i<list.size(); i++){
            if( list.get(i).name.equalsIgnoreCase(searchTerm)    ){
                return i;
            }
        }
        return -1;
    }//end search
    
    

}// class